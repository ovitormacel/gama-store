//Styles
import "./UserProfile.scss";

//Icons
import { IoGameController, IoLibrary } from "react-icons/io5";
import { FaHeart, FaEye, FaWallet, FaPen } from "react-icons/fa";

//Components
import CardDashboard from "../../components/Profile/CardDashboard/CardDashboard";
import { Link, Outlet } from "react-router-dom";

export default function UserProfile() {
    return (
        <main>
            <section className="profile-header">
                <div className="background-profile-cover">
                    <div className="image" style={{backgroundImage : 'url("https://media.rawg.io/media/games/779/77988e89f7862afeede524420aa251b0.jpg")'}}></div>
                    <span></span>
                </div>
                <div className="container">
                    <div className="profile-header-infos">
                        <div className="profile-photo">
                            <div className="photo" style={{backgroundImage : `url("https://i.pinimg.com/564x/b4/a1/1f/b4a11f067a4d7a1a085817985bcf55db.jpg")`}}></div>
                        </div>
                        <div className="profile-name">
                            <p className="name">Personal Name</p>
                            <p className="username">Username</p>
                        </div>
                    </div>
                </div>
                <nav className="profile-header-nav">
                    <Link to={'/profile'} className="profile-header-nav-btn active">Profile</Link>
                    <Link to={'library'} className="profile-header-nav-btn">Library</Link>
                    <Link to={'settings'} className="profile-header-nav-btn">Settings</Link>
                </nav>
            </section>

            <Outlet />
        </main>
    )
}