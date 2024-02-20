import { Link, useNavigate } from "react-router-dom";
import "../Login/Login.scss";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";

export default function Register() {

    //STATES
    const [name, setName] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [response, setResponse] = useState("");
    const [success, setSuccess] = useState("");

    const {signup} = useAuth();
    const navigate = useNavigate();

    //Handle Login
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        setResponse(null);
        setSuccess(null);
        
        //Verify Inputs
        if(!name | !username | !email | !password | !confirmPassword){
            setResponse("Preencha todos os campos.")
            return;
        } else{
            setResponse("");
        }

        //Verify Passwords
        if(password !== confirmPassword){
            setResponse("As senhas não são iguais")
            return;
        } else{
            setResponse("");
        }

        const res = signup(name, username, email, password)
    
        if(res){
            setResponse(res);
            return;
        } else{
            setResponse("");
        }

        setSuccess("Usuário cadastrado com sucesso!");
        setTimeout(()=>{
            navigate("/login");
        }, 1000)
        
    };

    return (
        <main id="bg-sections">
            <div className="container">
                <div className="sections">
                    <section className="form-login-section">
                        <form onSubmit={handleLoginSubmit}>
                            <h4 className="section-title">Criar nova conta</h4>
                            <div className="input-box">
                                <label htmlFor="fullname">Nome</label>
                                <input type="text" name="fullname" id="fullname" placeholder="Nome Completo"
                                onChange={(e) => setName(e.target.value)} value={name}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="username">Usuário</label>
                                <input type="text" name="username" id="username" 
                                onChange={(e) => setUsername(e.target.value)} value={username}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="email">E-mail</label>
                                <input type="email" name="email" id="email" placeholder="endereco@email.com"
                                onChange={(e) => setEmail(e.target.value)} value={email}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="pass">Senha</label>
                                <input type="password" name="pass" id="pass" 
                                onChange={(e) => setPassword(e.target.value)} value={password}/>
                            </div>
                            <div className="input-box">
                                <label htmlFor="pass-confirm">Confirmação de Senha</label>
                                <input type="text" name="pass-confirm" id="pass-confirm" 
                                onChange={(e) => setConfirmPassword(e.target.value)} value={confirmPassword}/>
                            </div>
                            <p className="form-login-error">{response}</p>
                            <p className="form-login-success">{success}</p>
                            <div className="form-actions">
                                <p className="dont-have-account">Já tem uma conta? <Link to={"/login"} className="signup-link">Entrar</Link></p>
                                <input type="submit" value="Registrar" className="btn btn-more"/>
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