import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Login(){

    //STATES
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [response, setResponse] = useState("");

    const {login} = useAuth();
    const navigate = useNavigate();

    //Handle Login
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setResponse(null);
        
        //Verify Inputs
        if(!email | !password){
            setResponse("Preencha todos os campos.")
            return;
        } else{
            setResponse("");
        }

        const res = login(email, password);

        if(res){
            setResponse(res);
            return;
        }

        navigate("/profile");
    }

    return(
        <main id="bg-sections">
            <div className="container">
                <div className="sections">
                    <section className="form-login-section">
                        <form onSubmit={handleLoginSubmit}>
                            <h4 className="section-title">Entre na sua conta</h4>
                            <div className="input-box">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" 
                                onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="pass">Senha</label>
                                <input type="password" name="pass" id="pass" 
                                onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                            <p className="form-login-error">{response}</p>
                            <div className="form-actions">
                                <p className="dont-have-account">Não tem uma conta? <Link to={"/register"} className="signup-link">Registrar</Link></p>
                                <input type="submit" value="Entrar" className="btn btn-more"/>
                            </div>
                        </form>
                    </section>

                    <section className="login-about">
                        <h1>Encontre seus jogos <span>favoritos</span> em uma biblioteca com mais de <span>800.000</span> opções.</h1>         
                    </section>
                </div>
            </div>
        </main>
    )
} 