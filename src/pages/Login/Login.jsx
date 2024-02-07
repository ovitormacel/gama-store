import { Link } from "react-router-dom";
import "./Login.scss";

export default function Login(){
    return(
        <main id="bg-sections">
            <div className="container">
                <div className="sections">
                    <section className="form-login-section">
                        <form>
                            <h4 className="section-title">Login to your account</h4>
                            <div className="input-box">
                                <label htmlFor="username">Username</label>
                                <input type="text" name="username" id="username" />
                            </div>
                            <div className="input-box">
                                <label htmlFor="pass">Password</label>
                                <input type="password" name="pass" id="pass" />
                            </div>
                            <div className="form-actions">
                                <p className="dont-have-account">Don't have an account? <Link className="signup-link">Sign up</Link></p>
                                <input type="submit" value="Sign in" className="btn btn-more"/>
                            </div>
                        </form>
                    </section>

                    <section className="login-about">
                        <h1>Find your <span>favorite</span> games in a library with more than <span>800,000</span> options.</h1>         
                    </section>
                </div>
            </div>
        </main>
    )
} 