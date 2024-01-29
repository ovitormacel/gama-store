//HOOKS
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


//COMPONENTS
import { FaCartPlus, FaHeart } from "react-icons/fa";

//STYLES
import "./Product.scss";
import ProductScreenshots from "../../components/ProductScreenshots/ProductScreenshots.jsx";
import { getSingleGame } from "../../hooks/useFetchGames.js";


export default function Product() {

    //Load Game States
    const [gameState, setGameState] = useState({});
    const [loading, setLoading] = useState(true);

    //Update State with a new game object
    const updateState = (gameObject) => {
        const object = {
            bg_image : gameObject.background_image_additional,
            cover : gameObject.background_image,
            genres : gameObject.genres,
            name : gameObject.name,
            developer : gameObject.developers[0].name,
            year : gameObject.released,
            age : gameObject.esrb_rating.name,
            description : gameObject.description_raw
        }

        setLoading(false);
        setGameState(object);
    }


    //Request game object to API
    const { productId } = useParams();

    const getGame = async () => {
        const result = await getSingleGame(productId);
        
        updateState(result);
    }

    useEffect(() => {
        getGame();
    }, []);

    return(
        <main>
            <div className="background-game-image">
                <img src={gameState.bg_image} alt={gameState.name} />
            </div>   
            <div className="container">

                <div className="layout-top">
                    <div className="col-1">
                        <section className="game-general-infos">
                            <div className={`game-image ${loading ? 'loading' : ''}`}>
                                <img src={gameState.cover} alt={`Capa ${gameState.cover}`} />
                                <div className="price">
                                    <p className={`sale ${loading ? 'loading' : ''}`}>-50%</p>
                                    <p className={`price-value ${loading ? 'loading' : ''}`}>R$ 249,90</p>
                                </div>
                            </div>
                            <div className="categories-and-actions">
                                <div className="game-categories">
                                    {gameState.genres ? gameState.genres.map((genre => (
                                        <div key={genre.id} className="category-el">
                                            {genre.name}
                                        </div>
                                    ))): ''}
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
                                    <div className={`title ${loading ? 'loading' : ''}`}>{gameState.name}</div>
                                    <div className={`launch `}>
                                        <div className={`enterprise ${loading ? 'loading' : ''}`}>{gameState.developer} • </div>
                                        <div className={`year ${loading ? 'loading' : ''}`}>{gameState.year}</div>
                                    </div>
                                </div>

                                <div className={`age ${loading ? 'loading' : ''}`}>
                                    <img src="/src/assets/18-rating.png" alt="" />
                                </div>
                            </div>

                            <div className="game-description">
                                <h2 className="section-title">Descrição</h2>
                                <p className={`description ${loading ? 'loading' : ''}`}>{gameState.description}</p>
                            </div>

                            <ProductScreenshots gameId={productId}/>

                            {/* <div className="section-screenshots">
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
                            </div> */}
                        </section>
                    </div>
                </div>

            </div>
        </main>
    )
}