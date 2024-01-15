//ICONS
import { FaSearch, FaHeart, FaShoppingCart, FaRegUser } from "react-icons/fa";

//STYLES
import "./MainLayout.scss"

import { Link, Outlet } from "react-router-dom";

export default function MainLayout() {
    return (
        <>
            <header>
                <div className="container">
                    <nav className="nav-bar">
                        <div className="left-side">
                            <ul>
                                <li><h2 className="logo">G</h2></li>
                                <li><Link to={"/"} className="nav-link">Início</Link></li>
                                <li><Link to={"/search"} className="nav-link">Explorar</Link></li>
                            </ul>
                            <form className="search-form">
                                <label htmlFor="search" style={{'display': 'none'}}>Search</label>
                                <input type="text" name="search" placeholder="Procurar Jogos..."/>
                                <button type="submit" className="search-btn-icon"><FaSearch /></button>
                            </form>
                        </div>

                        <div className="right-side">
                            <ul>
                                <li><button id="wishlist-icon" className="nav-bar-icon"><FaHeart /></button></li>
                                <li><button id="cart-icon" className="nav-bar-icon"><FaShoppingCart /></button></li>
                                <li>
                                    <Link to={"/profile"} className="profile-link"><FaRegUser /></Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <Outlet />

            <footer>
                <div className="container">
                    <div className="footer-top">
                        <div className="footer-infos">
                            <p>Gama Store &copy; Todos os Direitos Reservados</p>
                            <p>Desenvolvido por <a href="https://ovitormacel.com" target="_blank">Vitor Macel</a></p>
                        </div>
                        <h2 className="logo">G</h2>
                    </div>

                    <div className="footer-bottom">
                        <ul>
                            <li><Link to={'/'} className="nav-link">Início</Link></li>
                            <li><Link to={'/search'} className="nav-link">Explorar</Link></li>
                            <li><Link to={'/profile'} className="nav-link">Perfil</Link></li>
                            <li><Link to={'/#top'} className="nav-link">Destaques</Link></li>
                            <li><Link to={'/#popularity'} className="nav-link">Populares</Link></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}