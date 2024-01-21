import CardProduct from "../../components/CardProduct/CardProduct"
import "./SearchPage.scss"

export default function SearchPage() {
    return (
        <main className="main-search">
            <section className="search-result-section">
                <div className="container">
                    <h2 className="section-title">Todos os Jogos (9999)</h2>
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

            <section className="search-options-section">
                <h2 className="section-title">Categorias</h2>
                <ul>
                    <li><button className="btn-change-search">Ação</button></li>
                    <li><button className="btn-change-search">Arcade</button></li>
                    <li><button className="btn-change-search">Luta</button></li>
                    <li><button className="btn-change-search">Hack and Slash</button></li>
                    <li><button className="btn-change-search">FPS</button></li>
                    <li><button className="btn-change-search">RPG</button></li>
                    <li><button className="btn-change-search">Puzzles</button></li>
                    <li><button className="btn-change-search">Metroidvania</button></li>
                    <li><button className="btn-change-search">Terror</button></li>
                    <li><button className="btn-change-search">Crime & Mistério</button></li>
                    <li><button className="btn-change-search">Multiplayer</button></li>
                    <li><button className="btn-change-search">MMO</button></li>
                    <li><button className="btn-change-search">Rítmo</button></li>
                    <li><button className="btn-change-search">Sobrevivência</button></li>
                    <li><button className="btn-change-search">Animes</button></li>
                    <li><button className="btn-change-search">Plataforma</button></li>
                    <li><button className="btn-change-search">Simuladores</button></li>
                    <li><button className="btn-change-search">Cartas</button></li>
                    <li><button className="btn-change-search">Estratégia</button></li>
                </ul>
            </section>
        </main>
    )
}