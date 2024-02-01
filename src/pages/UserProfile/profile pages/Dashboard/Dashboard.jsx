//ComponentS
import { IoGameController, IoLibrary } from "react-icons/io5";
import { FaEye, FaHeart, FaPen, FaWallet } from "react-icons/fa";
import CardDashboard from "../../../../components/Profile/CardDashboard/CardDashboard";
import { Link } from "react-router-dom";

//Styles
import "./Dashboard.scss";

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
                            <div className="profile-recents-item">
                                <div className="item-image"></div>
                                <div className="item-infos">
                                    <p className="item-title">Spider Man Miles Morales</p>
                                    <p className="item-date">Acquired in: February 9, 2023</p>
                                    <Link to={'product/25465'} className="btn btn-more"><FaEye /> Ver Mais</Link>
                                </div>
                            </div>

                            <div className="profile-recents-item">
                                <div className="item-image"></div>
                                <div className="item-infos">
                                    <p className="item-title">Spider Man Miles Morales</p>
                                    <p className="item-date">Acquired in: February 9, 2023</p>
                                    <Link to={'product/25465'} className="btn btn-more"><FaEye /> Ver Mais</Link>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="profile-payments">
                    <h4 className="section-title-light">Payment Methods</h4>
                        <div className="profile-payment-list">
                            <div className="profile-payment-method">
                                <span className="payment-icon"><FaWallet /></span>
                                <p className="payment-number">Gama Coins</p>
                                <button className="payment-edit-menu"><FaPen /></button>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </section>
    )
}