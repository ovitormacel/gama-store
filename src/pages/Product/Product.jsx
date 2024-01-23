import { useRef, useState } from "react";
import "./Product.scss";

import { FaCartPlus, FaHeart } from "react-icons/fa";

export default function Product() {
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
                <img src="/src/assets/screenshot-02.jpg" alt="" />
            </div>   
            <div className="container">

                <div className="layout-top">
                    <div className="col-1">
                        <section className="game-general-infos">
                            <div className="game-image">
                                <img src="/src/assets/The Last of Us Part II (2020)capa.jpeg" alt="" />
                                <div className="price">
                                    <p className="sale">-50%</p>
                                    <p className="price-value">R$ 249,90</p>
                                </div>
                            </div>
                            <div className="game-categories">
                                <div className="category-el action">Ação</div>
                                <div className="category-el adventure">Aventura</div>
                                <div className="category-el shooter">Atirador</div>
                            </div>
                            <div className="actions-game">
                                <button className="btn btn-game-wishlist"><FaHeart /> Lista de Desejos</button>
                                <button className="btn btn-game-cart"><FaCartPlus /> Adicionar ao Carrinho</button>
                            </div>
                        </section>
                    </div>

                    <div className="col-2">
                        <section className="game-datails">
                            <div className="title-and-age">
                                <div className="title-and-launch">
                                    <div className="title">The Last of Us Part II</div>
                                    <div className="launch">
                                        <div className="enterprise">Naughty Dog • </div>
                                        <div className="year"> 2020</div>
                                    </div>
                                </div>

                                <div className="age">
                                    <img src="/src/assets/18-rating.png" alt="" />
                                </div>
                            </div>

                            <div className="game-description">
                                <h2 className="section-title">Descrição</h2>
                                <p>The Last of Us Part II is an action-adventure game set five years after the events of The Last of Us. The player traverses post-apocalyptic environments such as buildings and forests to advance the story. They can use firearms, improvised weapons, and stealth to defend against hostile humans and cannibalistic creatures infected by a mutated strain of the Cordyceps fungus. The game intermittently switches control between Ellie and Abby, and also briefly Joel in the opening sequence. The nimble nature of the player character introduces platforming elements, allowing the player to jump and climb to traverse environments and gain advantages during combat.</p>
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