import { useEffect, useState } from "react";
import "./Settings.scss";
import useAuth from "../../../../hooks/useAuth";
import { getDataProfile, updateDataProfile } from "../../../../hooks/useProfile";

export default function Settings() {

    //States
    const [userData, setUserData] = useState("");
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [coverUrl, setCoverUrl] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [response, setResponse] = useState("");

    //HOOK useAuth
    const {user} = useAuth();

    //Set Inputs
    const setInputsStates = (data) => {
        setName(data.name);
        setUsername(data.username);
        setCoverUrl(data.profile_cover_url);
        setProfileImage(data.profile_image_url);
    }

    //Get Data Profile
    useEffect(() => {
        const data = getDataProfile(user);
        
        if(data){
            setUserData(data);
        }

        setInputsStates(data);

    }, []);

    //Handle Profile Settings
    const handleProfileSettings = (e) => {
        e.preventDefault();

        if(userData){
            userData.name = name;
            userData.username = username;
            userData.profile_image_url = profileImage;
            userData.profile_cover_url = coverUrl;
            
            const storage = JSON.parse(localStorage.getItem("users-local-db"));

            let userIndex;
            storage?.forEach((user, index) => {
                if(user.email === userData.email){
                    userIndex = index
                }
            })

            updateDataProfile(userData, userIndex);
            setResponse("Alterações salvas com sucesso.")
        }
    }

    return(
        <section className="profile-settings">
            <div className="container">
                <h2 className="section-title">Ajustes</h2>
                <div className="settings-form-container">
                    <form className="settings-form" onSubmit={handleProfileSettings}>
                        <div className="settings-form-userdata">
                            <h2 className="section-title">Dados Principais</h2>
                            <div className="input-box">
                                <label htmlFor="fullname">Nome</label>
                                <input type="text" name="fullname" id="fullname" onChange={(e) => setName(e.target.value)} value={name}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="username">Usuário</label>
                                <input type="text" name="username" id="username" onChange={(e) => setUsername(e.target.value)} value={username} />
                            </div>
                        </div>

                        <div className="settings-form-imagesdata">
                            <h2 className="section-title">Imagens do Perfil</h2>
                            <div className="input-box">
                                <label htmlFor="cover">URL da foto de Capa</label>
                                <input type="text" name="cover" id="cover" onChange={(e) => setCoverUrl(e.target.value)} value={coverUrl}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="profile-image">URL da foto de Perfil</label>
                                <input type="text" name="profile-image" id="profile-image" onChange={(e) => setProfileImage(e.target.value)} value={profileImage}/>
                            </div>
                            <p className="response">{response}</p>
                            <input type="submit" value="Salvar Alterações" className="btn btn-more"/>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
}