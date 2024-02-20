//Styles
import "./Dashboard.scss";

//Components
import { Link } from "react-router-dom";
import { IoGameController, IoLibrary } from "react-icons/io5";
import { FaShoppingCart, FaPlus } from "react-icons/fa";
import CardDashboard from "../../../../components/Profile/CardDashboard/CardDashboard";
import { ProfileRecentsItem } from "../../../../components/Profile/ProfileRecentsItem/ProfileRecentsItem";
import { ProfilePaymentMethod } from "../../../../components/Profile/ProfilePaymentMethod/ProfilePaymentMethod";

//HOOKS
import { getDataProfile } from "../../../../hooks/useProfile";
import { useContext, useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";
import { CartContext } from "../../../../contexts/cart";

export default function Dashboard() {
    //States
    const [userData, setUserData] = useState({});
    const [refresh, setRefresh] = useState(false);
    
    //HOOK useAuth
    const {user} = useAuth();

    //Get Data Profile
    useEffect(() => {
        const data = getDataProfile(user);
        
        if(data){
            setUserData(data);
        }

    }, []);

    const formatCardNumber = (number) => {
        const lastNumbers = number.substr(15, 18);

        return `•••• •••• •••• ${lastNumbers}`;
    }

    const updateCardsList = (newArray) => {
        const newUserState = userData;

        newUserState.payment_methods = newArray;

        setUserData(newUserState);

        const storage = JSON.parse(localStorage.getItem("users-local-db"));

        //UPDATE IN LOCAL STORAGE
        let userIndex;
        storage?.forEach((user, index) => {
            if(user.email === userData.email){
                userIndex = index
            }
        })

        storage[userIndex] = userData;

        localStorage.setItem("users-local-db", JSON.stringify(storage));

        refresh ? setRefresh(false) : setRefresh(true);
    }


    //Shopping Cart
    const {cart} = useContext(CartContext);

    return (
        <section className="profile-dashboard">
            <div className="container">
                <h2 className="section-title">Perfil</h2>
                <div className="dashboard-cards">
                    <CardDashboard title={'Biblioteca'} icon={<IoLibrary />} quantity={`1`} />
                    <CardDashboard title={'Recentes'} icon={<IoGameController />} quantity={`1`} />
                    <CardDashboard title={'No Carrinho'} icon={<FaShoppingCart />} quantity={`${cart ? cart.length : "0"}`} />
                </div>

                <div className="columns">
                    <section className="profile-recents">
                        <h4 className="section-title-light">Biblioteca</h4>
                        <div className="profile-recents-list">
                            <ProfileRecentsItem />
                        </div>
                    </section>

                    <section className="profile-payments">
                    <h4 className="section-title-light">Cartões Cadastrados</h4>
                        <div className="profile-payment-list">
                            <ProfilePaymentMethod method={"gama-coins"} cardName={"Gama Coins"}/>
                                {userData.payment_methods ? userData.payment_methods.map((card, index) => (
                                    <ProfilePaymentMethod key={index} method={"credit-card"} cardName={formatCardNumber(card.cardNumber)} id={card.id} updateList={updateCardsList}/>
                                )) : ""}
                            <Link to={"new-payment"} className="btn btn-more add-method"><FaPlus /> Novo Cartão</Link>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}