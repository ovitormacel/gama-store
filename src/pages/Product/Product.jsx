//HOOKS
import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";


//COMPONENTS
import { FaCartPlus, FaHeart } from "react-icons/fa";

//STYLES
import "./Product.scss";
import ProductScreenshots from "../../components/ProductScreenshots/ProductScreenshots.jsx";
import { getSingleGame } from "../../hooks/useFetchGames.js";
import { CartContext } from "../../contexts/cart.jsx";

export default function Product() {

    //Load Game States
    const [gameState, setGameState] = useState({});
    const [loading, setLoading] = useState(true);

    //Update State with a new game object
    const updateState = (gameObject) => {
        
        const object = {
            id : gameObject.id,
            bg_image : gameObject.background_image_additional,
            cover : gameObject.background_image,
            genres : gameObject.genres,
            name : gameObject.name,
            developer : gameObject.developers[0].name,
            year : gameObject.released,
            description : gameObject.description_raw,
            price : gameObject.price
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


    //Add to Shopping Cart
    const {setCart} = useContext(CartContext);
    const [response, setResponse] = useState();

    const handleAddToShoppingCart = () => {

        const obj = {
            cover : gameState.cover,
            name : gameState.name,
            price : Number(gameState.price),
            id: gameState.id
        }

        const cartStorage = JSON.parse(localStorage.getItem("gama-shopping-cart"));

        if(cartStorage != null){
            let hasGame = false;

            cartStorage?.forEach((game) => {
                if(game.id === obj.id){
                    hasGame = true;
                }
            })

            if(hasGame){
                alert("O jogo escolhido já está no Carrinho.");
                return;
            }

            const newCart = [...cartStorage, obj];
            localStorage.setItem("gama-shopping-cart", JSON.stringify(newCart));
            setCart(newCart);
        }else{
            localStorage.setItem("gama-shopping-cart", JSON.stringify([obj]));
            setCart([obj]);
        }

        setResponse("Adicionado ao carrinho.");
    }

    return(
        <main>
            <div className="background-game-image" style={{backgroundImage: `url(${gameState.bg_image})`}}></div>   
            <div className="container">

                <div className="layout-top">
                    <div className="col-1">
                        <section className="game-general-infos">
                            <div className={`game-image ${loading ? 'loading' : ''}`} style={{backgroundImage: `url(${gameState.cover})`}}></div>
                            <div className="price">
                                <p className={`sale ${loading ? 'loading' : ''}`}>-50%</p>
                                <p className={`price-value ${loading ? 'loading' : ''}`}>{`R$ ${gameState.price}`}</p>
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
                                    {/* <button className="btn btn-game-wishlist"><FaHeart /> Lista de Desejos</button> */}
                                    <button className="btn btn-game-cart" disabled={loading ? true : false} onClick={handleAddToShoppingCart}><FaCartPlus /> Adicionar ao Carrinho</button>
                                    <p className="response">{response}</p>
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
                        </section>
                    </div>
                </div>

            </div>
        </main>
    )
}