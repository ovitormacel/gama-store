import { useEffect, useRef, useState } from "react"
import CardProduct from "../../components/CardProduct/CardProduct"
import "./SearchPage.scss"
import { useParams } from "react-router-dom";
import { getAllGames, getGameByGenre, getSearchedList } from "../../hooks/useFetchGames";


export default function SearchPage() {

    //Title Ref
    const titleRef = useRef(null);

    const [searchedGames, setSearchedGames] = useState([]);
    const [loading, setLoading] = useState(true);

    //GET SEARCHED GAMES
    const {searchQuery} = useParams();

    const getSearched = async() => {
        setLoading(true);
        
        if(searchQuery == 'all'){
            const result = await getAllGames();
            titleRef.current.innerText = `${result.seo_title} (${result.count})`

            setSearchedGames(result.results);
        } 
        if((searchQuery != 'all')){
            const result = await getSearchedList(searchQuery);
            titleRef.current.innerText = `Resultados para: ${searchQuery}`
            setSearchedGames(result.results);
        }

        setLoading(false);
    }

    useEffect(() => {
        getSearched();
    }, [searchQuery])

    //Categories Menu
    const [openMenu, setOpenMenu] = useState(false);

    const handleHambMenuButton = () => {
        openMenu ? setOpenMenu(false) : setOpenMenu(true);
    }

    const handleChangeCategory = async(e) => {
        const genre = e.target.dataset.genre;

        setLoading(true);
        
        if(genre){
            const result = await getGameByGenre(genre);
            titleRef.current.innerText = `${e.target.innerText} (${result.count})`

            handleHambMenuButton();
            setSearchedGames(result.results);
        }

        setLoading(false);
    }

    return (
        <main className="main-search">
            <section className="search-result-section">
                <div className="container">
                    <div className="title-container">
                        <h2 className="section-title" ref={titleRef}>Todos os Jogos (9999)</h2>
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
                        {searchedGames.map((game) => (
                            <CardProduct key={game.id} id={game.id} name={game.name} background={game.background_image}/>
                        ))}
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
                    <li><button className="btn-change-search" data-genre="action" onClick={handleChangeCategory}>Action</button></li>
                    <li><button className="btn-change-search" data-genre="indie" onClick={handleChangeCategory}>Indie</button></li>
                    <li><button className="btn-change-search" data-genre="adventure" onClick={handleChangeCategory}>Adventure</button></li>
                    <li><button className="btn-change-search" data-genre="role-playing-games-rpg" onClick={handleChangeCategory}>RPG</button></li>
                    <li><button className="btn-change-search" data-genre="strategy" onClick={handleChangeCategory}>Strategy</button></li>
                    <li><button className="btn-change-search" data-genre="shooter" onClick={handleChangeCategory}>Shooter</button></li>
                    <li><button className="btn-change-search" data-genre="casual" onClick={handleChangeCategory}>Casual</button></li>
                    <li><button className="btn-change-search" data-genre="simulation" onClick={handleChangeCategory}>Simulation</button></li>
                    <li><button className="btn-change-search" data-genre="puzzle" onClick={handleChangeCategory}>Puzzle</button></li>
                    <li><button className="btn-change-search" data-genre="arcade" onClick={handleChangeCategory}>Arcade</button></li>
                    <li><button className="btn-change-search" data-genre="platformer" onClick={handleChangeCategory}>Platformer</button></li>
                    <li><button className="btn-change-search" data-genre="racing" onClick={handleChangeCategory}>Racing</button></li>
                    <li><button className="btn-change-search" data-genre="massively-multiplayer" onClick={handleChangeCategory}>MMO</button></li>
                    <li><button className="btn-change-search" data-genre="sports" onClick={handleChangeCategory}>Sports</button></li>
                    <li><button className="btn-change-search" data-genre="fighting" onClick={handleChangeCategory}>Fighting</button></li>
                    <li><button className="btn-change-search" data-genre="family" onClick={handleChangeCategory}>Family</button></li>
                    <li><button className="btn-change-search" data-genre="card" onClick={handleChangeCategory}>Cards</button></li>
                </ul>
            </section>
        </main>
    )
}