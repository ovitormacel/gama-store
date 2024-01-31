//ICONS
import { FaFire } from "react-icons/fa";

//Components
import SectionCarrousel from "../../components/SectionCarrousel/SectionCarrousel";
import TopGames from "../../components/TopGames/TopGames";
import CardProductSales from "../../components/CardProductSales/CardProductSales";

//Styles
import "./Home.scss";

export default function Home() {
    return (
        <main>
            <div className="container">
                <TopGames />
            </div>
            <SectionCarrousel category="Populares" categoryId='popular'/>
            
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
            <SectionCarrousel category="Indie" categoryId='indie'/>
            <SectionCarrousel category="Casual" categoryId='casual'/>
            <SectionCarrousel category="Simulation" categoryId='simulation'/>
            <SectionCarrousel category="Racing" categoryId='racing'/>
        </main>
    )
}