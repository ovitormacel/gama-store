import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { CiWallet, CiCreditCard1 } from "react-icons/ci";
import "./ProfilePaymentMethod.scss";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import useAuth from "../../../hooks/useAuth";
import { getDataProfile } from "../../../hooks/useProfile";

export function ProfilePaymentMethod({method, cardName, id, updateList}) {
    //STORAGE
    //User States
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

    //KEBAB MENU
    const [kebabActive, setKebabActive] = useState(false);

    const handleOpenKebabMenu = () => {
        kebabActive ? setKebabActive(false) : setKebabActive(true);
    }

    //DELETE PAYMENT METHOD
    const handleDeletePaymentMethod = () => {
        let paymentMethod = userData.payment_methods;

        let newArray =[];

        paymentMethod?.forEach((payment) => {
            if(payment.id != id){
                newArray.push(payment)
            }
        })

        userData.payment_methods = newArray;
        updateList(newArray);
        
        handleOpenKebabMenu();
    }


    return (
        <div className="profile-payment-method">
            <div className="icon-and-number">
                <span className="payment-icon">{method === "gama-coins" ? <CiWallet/> : <CiCreditCard1 />}</span>
                <p className="payment-number">{cardName}</p>
            </div>
            <button className="payment-edit-menu" onClick={handleOpenKebabMenu}><FaPen /></button>
        
            <div className={`kebab-menu ${kebabActive ? "active" : ""}`}>
                <Link to={"new-payment"} className="kebab-btn"><FaPen /> Editar</Link>
                <button className="kebab-btn" onClick={handleDeletePaymentMethod}><FaRegTrashAlt /> Excluir</button>
            </div>
        </div>
    )
}