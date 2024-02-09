import { FaPen, FaRegTrashAlt } from "react-icons/fa";
import { CiWallet, CiCreditCard1 } from "react-icons/ci";
import "./ProfilePaymentMethod.scss";
import { Link } from "react-router-dom";

export function ProfilePaymentMethod({method, cardName}) {
    return (
        <div className="profile-payment-method">
            <div className="icon-and-number">
                <span className="payment-icon">{method === "gama-coins" ? <CiWallet/> : <CiCreditCard1 />}</span>
                <p className="payment-number">{cardName}</p>
            </div>
            <button className="payment-edit-menu"><FaPen /></button>
        
            <div className="kebab-menu">
                <Link to={"new-payment"} className="kebab-btn"><FaPen /> Editar</Link>
                <button className="kebab-btn"><FaRegTrashAlt /> Excluir</button>
            </div>
        </div>
    )
}