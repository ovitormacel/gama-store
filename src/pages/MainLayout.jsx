//ICONS
import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";

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
                                <li><h1 className="logo">G</h1></li>
                                <li><Link to={"/"} className="nav-link">Início</Link></li>
                                <li><Link to={"/search"} className="nav-link">Explorar</Link></li>
                            </ul>
                            <form className="search-form">
                                <label htmlFor="search" style={{'display': 'none'}}>Search</label>
                                <input type="text" name="search" placeholder="Procurar Jogos..."/>
                                <button type="submit"><FaSearch /></button>
                            </form>
                        </div>

                        <div className="right-side">
                            <ul>
                                <li><button id="wishlist-icon" className="nav-bar-icon"><FaHeart /></button></li>
                                <li><button id="cart-icon" className="nav-bar-icon"><FaShoppingCart /></button></li>
                                <li>
                                    <Link to={"/profile"}>Perfil</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </header>

            <Outlet />
        </>
    )
}