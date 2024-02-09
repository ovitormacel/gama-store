//Styles
import "./Dashboard.scss";

//ComponentS
import { Link } from "react-router-dom";
import { IoGameController, IoLibrary } from "react-icons/io5";
import { FaEye, FaHeart, FaPen, FaWallet, FaPlus } from "react-icons/fa";
import CardDashboard from "../../../../components/Profile/CardDashboard/CardDashboard";
import { ProfileRecentsItem } from "../../../../components/Profile/ProfileRecentsItem/ProfileRecentsItem";
import { ProfilePaymentMethod } from "../../../../components/Profile/ProfilePaymentMethod/ProfilePaymentMethod";

//HOOKS
import { getDataProfile } from "../../../../hooks/useProfile";
import { useEffect, useState } from "react";
import useAuth from "../../../../hooks/useAuth";

export default function Dashboard() {
    //States
    const [userData, setUserData] = useState({});
    
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

    return (
        <section className="profile-dashboard">
            <div className="container">
                <h2 className="section-title">Profile</h2>
                <div className="dashboard-cards">
                    <CardDashboard title={'All in Library'} icon={<IoLibrary />} quantity={`${userData.library ? userData.library.length : ""}`} />
                    <CardDashboard title={'Recently Acquired'} icon={<IoGameController />} quantity={`${userData.recents ? userData.recents.length : ""}`} />
                    <CardDashboard title={'On the Wish List'} icon={<FaHeart />} quantity={`${userData.wishlist ? userData.wishlist.length : ""}`} />
                </div>

                <div className="columns">
                    <section className="profile-recents">
                        <h4 className="section-title-light">Recently Acquired</h4>
                        <div className="profile-recents-list">
                            <ProfileRecentsItem />
                            <ProfileRecentsItem />
                            <ProfileRecentsItem />
                        </div>
                    </section>

                    <section className="profile-payments">
                    <h4 className="section-title-light">Payment Methods</h4>
                        <div className="profile-payment-list">
                            <ProfilePaymentMethod method={"gama-coins"} cardName={"Gama Coins"}/>
                                {userData.payment_methods ? userData.payment_methods.map((card, index) => (
                                    <ProfilePaymentMethod key={index} method={"credit-card"} cardName={formatCardNumber(card.cardNumber)}/>
                                )) : ""}
                            <Link to={"new-payment"} className="btn btn-more add-method"><FaPlus /> Add new Card</Link>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}