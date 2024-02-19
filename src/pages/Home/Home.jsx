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
            <SectionCarrousel category="Action" categoryId='action'/>
            <SectionCarrousel category="Indie" categoryId='indie'/>
            <SectionCarrousel category="Casual" categoryId='casual'/>
            <SectionCarrousel category="Simulation" categoryId='simulation'/>
            <SectionCarrousel category="Racing" categoryId='racing'/>
        </main>
    )
}