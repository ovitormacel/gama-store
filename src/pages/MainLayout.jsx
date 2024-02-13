//ICONS
import { FaSearch, FaHeart, FaShoppingCart, FaRegUser } from "react-icons/fa";

//STYLES
import "./MainLayout.scss"

import { Link, Outlet, redirect, useNavigate } from "react-router-dom";
import { useState } from "react";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";


export default function MainLayout() {

    const navigate = useNavigate();

    //SEARCH
    const handleSearchForm = (event) => {
        event.preventDefault();

        const searchQuery = event.target[0].value;

        navigate(`/search/${searchQuery}`, );
    }


    //OPEN HAMBURGUER MENU
    const [openedMenu, setOpenedMenu] = useState(false);
    
    const handleBtnMenu = () => {
        !openedMenu ? setOpenedMenu(true) : setOpenedMenu(false);
    }


    //OPEN WISHLIST
    const [openedShoppingCart, setOpenedShoppingCart] = useState(false);

    const handleBtnShoppingCart = () => {
        !openedShoppingCart ? setOpenedShoppingCart(true) : setOpenedShoppingCart(false);
    }

    return (
        <>
            <header>
                <div className="container">
                    <nav className="nav-bar">
                        <div className="left-side">
                            <h2 className="logo">G</h2>
                            <div className={`items-menu ${openedMenu ? 'active' : ''}`}>
                                <Link to={"/"} className="nav-link" onClick={handleBtnMenu}>Início</Link>
                                <Link to={"/profile"} className="nav-link" id="profile-nav-link" onClick={handleBtnMenu}>Seu Perfil</Link>
                                <Link to={"/search/all"} className="nav-link" onClick={handleBtnMenu}>Explorar</Link>
                                <form className="search-form" onSubmit={handleSearchForm}>
                                    <label htmlFor="search" style={{'display': 'none'}}>Search</label>
                                    <input type="text" name="search" placeholder="Procurar Jogos..."/>
                                    <button type="submit" className="search-btn-icon"><FaSearch /></button>
                                </form>
                            </div>
                        </div>

                        <div className="right-side">
                            <ul>
                                <li><button id="wishlist-icon" className="nav-bar-icon"><FaHeart /></button></li>
                                <li><button id="cart-icon" className="nav-bar-icon" onClick={handleBtnShoppingCart}><FaShoppingCart /></button></li>
                                <li><Link to={"/profile"} className="profile-link"><FaRegUser /></Link></li>
                                <li>
                                    <button className="btn-menu-hamb" onClick={handleBtnMenu}>
                                        <span className="bar bar1"></span>
                                        <span className="bar bar2"></span>
                                        <span className="bar bar3"></span>
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <ShoppingCart state={openedShoppingCart}/>
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