//Components
import SectionCarrousel from "../../components/SectionCarrousel/SectionCarrousel";
import TopGames from "../../components/TopGames/TopGames";
//Styles
import "./Home.scss";

export default function Home() {
    return (
        <main>
            <div className="container">
                <TopGames />
            </div>
            <SectionCarrousel category="Populares" categoryId='popular'/>
            <SectionCarrousel category="Ação" categoryId='action'/>
            <SectionCarrousel category="Indie" categoryId='indie'/>
            <SectionCarrousel category="Casual" categoryId='casual'/>
            <SectionCarrousel category="Simulação" categoryId='simulation'/>
            <SectionCarrousel category="Corrida" categoryId='racing'/>
        </main>
    )
}