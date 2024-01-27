import { FaFire } from "react-icons/fa";
import SectionCarrousel from "../../components/SectionCarrousel/SectionCarrousel";
import TopGames from "../../components/TopGames/TopGames";
import "./Home.scss";
import CardProductSales from "../../components/CardProductSales/CardProductSales";

export default function Home() {
    return (
        <main>
            <div className="container">
                <TopGames />
            </div>
            <SectionCarrousel category="Populares" />
            
            <section className="sales-section-container">
                <div className="container">
                    <div className="section-sales">
                        <p className="section-title"><FaFire className="icon"/>Promoções da Semana</p>
                        <div className="cards-sales">
                            <div className="main-card-sale">
                                <CardProductSales />
                            </div>
                            <div className="cards-sales-grid">
                                <CardProductSales small={true}/>
                                <CardProductSales small={true}/>
                                <CardProductSales small={true}/>
                                <CardProductSales small={true}/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <SectionCarrousel category="Action" categoryId='action'/>
            <SectionCarrousel category="Arcade" categoryId='arcade'/>
        </main>
    )
}