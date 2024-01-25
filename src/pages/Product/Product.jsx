//HOOKS
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import useFetchGames from "../../hooks/useFetchGames.js";

//STYLES
import "./Product.scss";

//COMPONENTS
import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function Product() {
    //GAME STATES
    const [gameBackgroundImage, setGameBackgroundImage] = useState("");
    const [gameCover, setGameCover] = useState("");
    const [gameGenres, setGameGenres] = useState([]);
    const [gameTitle, setGameTitle] = useState("");
    const [gameDeveloper, setGameDeveloper] = useState("");
    const [gameYear, setGameYear] = useState("");
    const [gameAge, setGameAge] = useState("");
    const [gameDescription, setGameDescription] = useState("");



    const updateStates = (gameObject) => {
        setGameBackgroundImage(gameObject.background_image_additional);
        setGameCover(gameObject.background_image);
        setGameGenres(gameObject.genres);
        setGameTitle(gameObject.name);
        setGameDeveloper(gameObject.developers[0].name);
        setGameYear(gameObject.released);
        setGameAge(gameObject.esrb_rating.name);
        setGameDescription(gameObject.description_raw);
    }


    //REQUEST API
    const { productId } = useParams();
    const getGame = async () => {
        const url = `games/${productId}`;

        const result = await useFetchGames(url);
    
        console.log(result);
        updateStates(result);
    }

    useEffect(() => {
        getGame();
    }, []);


    //CHANGE SCREENSHOTS
    const screenshotsList = [
        "/src/assets/screenshot-01.jpg",
        "/src/assets/screenshot-02.jpg",
        "/src/assets/screenshot-03.jpg"
    ]

    const screenshotsListElement = useRef(null);

    const [selectedScreenshot, setSelectedScreenshot] = useState(screenshotsList[0]);
    
    const handleChangeScreenshot = (e) => {
        screenshotsListElement.current.childNodes.forEach((el) => {
            el.classList.remove('selected');
        });

        const number = e.target.dataset.number;
        e.target.classList.add('selected');

        setSelectedScreenshot(screenshotsList[number]);
    }

    return(
        <main>
            <div className="background-game-image">
                <img src={gameBackgroundImage} alt={gameTitle} />
            </div>   
            <div className="container">

                <div className="layout-top">
                    <div className="col-1">
                        <section className="game-general-infos">
                            <div className="game-image">
                                <img src={gameCover} alt={`Capa ${gameTitle}`} />
                                <div className="price">
                                    <p className="sale">-50%</p>
                                    <p className="price-value">R$ 249,90</p>
                                </div>
                            </div>
                            <div className="categories-and-actions">
                                <div className="game-categories">
                                    {gameGenres.map((genre => (
                                        <div key={genre.id} className="category-el">
                                            {genre.name}
                                        </div>
                                    )))}
                                </div>
                                <div className="actions-game">
                                    <button className="btn btn-game-wishlist"><FaHeart /> Lista de Desejos</button>
                                    <button className="btn btn-game-cart"><FaCartPlus /> Adicionar ao Carrinho</button>
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className="col-2">
                        <section className="game-datails">
                            <div className="title-and-age">
                                <div className="title-and-launch">
                                    <div className="title">{gameTitle}</div>
                                    <div className="launch">
                                        <div className="enterprise">{gameDeveloper} • </div>
                                        <div className="year"> {gameYear}</div>
                                    </div>
                                </div>

                                <div className="age">
                                    <img src="/src/assets/18-rating.png" alt="" />
                                </div>
                            </div>

                            <div className="game-description">
                                <h2 className="section-title">Descrição</h2>
                                <p>{gameDescription}</p>
                            </div>

                            <div className="section-screenshots">
                                <h2 className="section-title">Capturas de Tela</h2>
                                <div className="main-screenshot">
                                    <img src={selectedScreenshot} alt="" />
                                </div>

                                <div className="screenshots-list" ref={screenshotsListElement}>
                                    <button className="screenshot-item selected" data-number="0" onClick={handleChangeScreenshot}>
                                        <img src="/src/assets/screenshot-01.jpg" alt="" />
                                    </button>
                                    <button className="screenshot-item" data-number="1" onClick={handleChangeScreenshot}>
                                        <img src="/src/assets/screenshot-02.jpg" alt="" />
                                    </button>
                                    <button className="screenshot-item" data-number="2" onClick={handleChangeScreenshot}>
                                        <img src="/src/assets/screenshot-03.jpg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>

            </div>
        </main>
    )
}