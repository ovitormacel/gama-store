//Styles
import { useEffect, useState } from "react";
import "./UserProfile.scss";

//Components
import { Link, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { getDataProfile } from "../../hooks/useProfile";

export default function UserProfile() {

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

    useEffect(() => {
        const data = getDataProfile(user);
        
        if(data){
            setUserData(data);
        }
    }, [user]); 

    return (
        <main>
            <section className="profile-header">
                <div className="background-profile-cover">
                    <div className="image" style={{backgroundImage : `url(${userData.profile_cover_url ? userData.profile_cover_url : "/src/assets/background-default.jpg"})`}}></div>
                    <span></span>
                </div>
                <div className="container">
                    <div className="profile-header-infos">
                        <div className="profile-photo">
                            <div className="photo" style={{backgroundImage : `url(${userData.profile_image_url ? userData.profile_image_url : ""})`}}><span className="icons-empty"></span></div>
                        </div>
                        <div className="profile-name">
                            <p className="name">{userData ? userData.name : ""}</p>
                            <p className="username">{userData ? userData.username : ""}</p>
                        </div>
                    </div>
                </div>
                <nav className="profile-header-nav">
                    <Link to={'/profile'} className="profile-header-nav-btn active">Profile</Link>
                    <Link to={'settings'} className="profile-header-nav-btn">Settings</Link>
                </nav>
            </section>

            <Outlet />
        </main>
    )
}