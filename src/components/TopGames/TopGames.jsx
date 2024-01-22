import { Link } from "react-router-dom";
import "./TopGames.scss"

//ICONS
import { FaRegHeart, FaEye, FaChevronCircleLeft } from "react-icons/fa";
import { useRef, useState } from "react";

export default function TopGames() {

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
                if(slide != 1){
                    setSlide((state) => state + 1);
                    sliderContainer.current.style.animation="blinkContainer 1s"
                }else{
                    setSlide(1);
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
                
                <div className="slider-item">
                    {/* <img src="src/assets/The Last of Us.jpeg" alt="" /> */}
                    <div className="slider-item-infos">
                        <div className="item-infos">
                            <h2 className="title">The Last of Us Remastered</h2>
                            <div className="price">
                                <p className="sale">-50%</p>
                                <p className="price-value">R$ 249.90</p>
                            </div>
                            <div className="main-actions">
                                <Link to={"search/01"} className="btn btn-more"><FaEye /> Ver mais</Link>
                                <button className="btn btn-blank"><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="slider-item">
                    <img src="src/assets/God of War.jpeg" alt="" />
                    <div className="slider-item-infos">
                        <div className="item-infos">
                            <h2 className="title">God of War 2018</h2>
                            <div className="price">
                                <p className="sale">-60%</p>
                                <p className="price-value">R$ 98.90</p>
                            </div>
                            <div className="main-actions">
                                <Link to={"search/01"} className="btn btn-more"><FaEye /> Ver mais</Link>
                                <button className="btn btn-blank"><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>
            
            </div>
        
        </div>
    )
}