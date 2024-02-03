import { FaPen, FaWallet } from "react-icons/fa";
import "./ProfilePaymentMethod.scss";

export function ProfilePaymentMethod() {
    return (
        <div className="profile-payment-method">
            <div className="icon-and-number">
                <span className="payment-icon"><FaWallet /></span>
                <p className="payment-number">Gama Coins</p>
            </div>
            <button className="payment-edit-menu"><FaPen /></button>
        </div>
    )
}