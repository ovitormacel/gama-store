import SectionCarrousel from "../../components/SectionCarrousel/SectionCarrousel";
import TopGames from "../../components/TopGames/TopGames";

export default function Home() {
    return (
        <main>
            <div className="container">
                <TopGames />
            </div>
            <SectionCarrousel category="Populares" />
            <SectionCarrousel category="Ação" />
            <SectionCarrousel category="Crime & Mistério" />
        </main>
    )
}