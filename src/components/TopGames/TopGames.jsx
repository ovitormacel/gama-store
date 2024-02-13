import { Link } from "react-router-dom";
import "./TopGames.scss"

//ICONS
import { FaRegHeart, FaEye, FaChevronCircleLeft } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";
import { getPopularGames, getSingleGame } from "../../hooks/useFetchGames";

export default function TopGames() {

    //Games
    const [topGamesList, setTopGamesList] = useState();
    const [loading, setLoading] = useState(true);

    const updateStates = (games) => {
        setTopGamesList(games)
        setLoading(false);
    }

    const getTopGames = async() => {
        setLoading(true);

        const games = [];
        const result = await getPopularGames('year=2023');

            
    
        updateStates(result.results)
    }

    useEffect(() => {
        getTopGames();
    }, [])

    //Move Slider
    const sliderContainer = useRef(null)
    const [slide, setSlide] = useState(0);

    const handleBtnSlider = (side) => {
        switch (side){
            case "left":
                if(slide != 0){
                    setSlide((state) => state - 1);
                    sliderContainer.current.style.animation="blinkContainer 1s"
                } else{
                    setSlide(0);
                }
                break;

            case "right":
                if(slide != 3){
                    setSlide((state) => state + 1);
                    sliderContainer.current.style.animation="blinkContainer 1s"
                }else{
                    setSlide(0);
                }

                break;

            default:
                console.log("Opção Inválida!");
        }
        
    }

    return (
        <div className="slider-container" ref={sliderContainer}>
            <div className="slider-controllers">
                <span className="destaques">Destaques</span>
                <button className="slider-control-btn left" onClick={() => handleBtnSlider("left")}><FaChevronCircleLeft/></button>
                <button className="slider-control-btn right" onClick={() => handleBtnSlider("right")}><FaChevronCircleLeft/></button>
            </div>
            
            <div className="slider-content" style={{transform: `translateX(-${slide}00%)`}}>
                
                {!loading ? topGamesList.map((game) => (
                    <div key={game.id} className="slider-item" style={{backgroundImage : `url(${game.background_image})`}}>
                        <div className="slider-item-infos">
                            <div className="item-infos">
                                <h2 className="title">{game.name}</h2>
                                <div className="price">
                                    <p className="sale">-50%</p>
                                    <p className="price-value">{`R$ ${game.price}`}</p>
                                </div>
                                <div className="main-actions">
                                    <Link to={`product/${game.id}`} className="btn btn-more"><FaEye /> Ver mais</Link>
                                    <button className="btn btn-blank"><FaRegHeart /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                )) : ''}
            
            </div>
        
        </div>
    )
}