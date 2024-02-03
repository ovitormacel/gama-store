//ComponentS
import { IoGameController, IoLibrary } from "react-icons/io5";
import { FaEye, FaHeart, FaPen, FaWallet, FaPlus } from "react-icons/fa";
import CardDashboard from "../../../../components/Profile/CardDashboard/CardDashboard";
import { Link } from "react-router-dom";

//Styles
import "./Dashboard.scss";
import { ProfileRecentsItem } from "../../../../components/Profile/ProfileRecentsItem/ProfileRecentsItem";
import { ProfilePaymentMethod } from "../../../../components/Profile/ProfilePaymentMethod/ProfilePaymentMethod";

export default function Dashboard() {
    return (
        <section className="profile-dashboard">
            <div className="container">
                <h2 className="section-title">Profile</h2>
                <div className="dashboard-cards">
                    <CardDashboard title={'All in Library'} icon={<IoLibrary />} quantity={'06'} />
                    <CardDashboard title={'Recently Acquired'} icon={<IoGameController />} quantity={'03'} />
                    <CardDashboard title={'On the Wish List'} icon={<FaHeart />} quantity={'16'} />
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
                            <ProfilePaymentMethod />
                            <ProfilePaymentMethod />
                            <Link to={"new-payment"} className="btn btn-more add-method"><FaPlus /> New Method</Link>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}