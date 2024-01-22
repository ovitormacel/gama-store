import { useState } from "react"
import CardProduct from "../../components/CardProduct/CardProduct"
import "./SearchPage.scss"

export default function SearchPage() {

    const [openMenu, setOpenMenu] = useState(false);

    const handleHambMenuButton = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true);
        console.log(openMenu)
    }

    return (
        <main className="main-search">
            <section className="search-result-section">
                <div className="container">
                    <div className="title-container">
                        <h2 className="section-title">Todos os Jogos (9999)</h2>
                        <button className="hamb-menu" onClick={handleHambMenuButton}>
                            <p className="categories-label">Categorias</p>
                            <div className="bars">
                                <span className="bar bar1"></span>
                                <span className="bar bar2"></span>
                                <span className="bar bar3"></span>
                            </div>
                        </button>
                    </div>
                    <div className="search-results-cards">
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                        <CardProduct />
                    </div>
                </div>
            </section>

            <section className={`search-options-section ${openMenu ? 'opened' : ''}`}>
                <div className="search-menu-top">
                    <h2 className="section-title">Categorias</h2>
                    <button className="close-btn" onClick={handleHambMenuButton}>
                    </button>
                </div>
                <ul>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Ação</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Arcade</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Luta</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Hack and Slash</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>FPS</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>RPG</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Puzzles</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Metroidvania</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Terror</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Crime & Mistério</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Multiplayer</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>MMO</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Rítmo</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Sobrevivência</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Animes</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Plataforma</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Simuladores</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Cartas</button></li>
                    <li><button className="btn-change-search" onClick={handleHambMenuButton}>Estratégia</button></li>
                </ul>
            </section>
        </main>
    )
}