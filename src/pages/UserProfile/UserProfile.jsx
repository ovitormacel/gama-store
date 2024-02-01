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
                            <div className="photo" style={{backgroundImage : `url("https://www.startpage.com/av/proxy-image?piurl=https%3A%2F%2Fi.pinimg.com%2F736x%2F68%2Fd0%2F43%2F68d0438c1f10d5d8759cceb1c294050b.jpg&sp=1706794137T5ccc8a4bf7443c77b67c6ae5e610a82528766653fef7392c34fc04f14adc812e")`}}></div>
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