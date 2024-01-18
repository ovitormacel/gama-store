import { FaChevronCircleLeft, FaFire} from "react-icons/fa";
import CardProduct from "../CardProduct/CardProduct";
import "./SectionCarrousel.scss";

import { useRef, useState } from "react";

export default function SectionCarrousel({category}) {

    const [carrouselTranslate, setCarrouselTranslate] = useState(4.5);

    const handleBtnSlider = (side) => {
        switch (side){
            case "left":
                if(carrouselTranslate < 0) {
                    setCarrouselTranslate((state) => state + 19.0);
                } else {
                    setCarrouselTranslate(4.5);
                }
                break;
            case "right":
                setCarrouselTranslate((state) => state - 19.0);
                break;
            default:
                console.log("Opção Inválida!");
        }
    }

    return (
        <section className="section-carrousel">
            <div className="container">
                <p className="section-title"><FaFire className="icon"/>{category}</p>
                <div className="controllers">
                    <button className="slider-control-btn left" onClick={() => handleBtnSlider("left")}><FaChevronCircleLeft/></button>
                    <button className="slider-control-btn right" onClick={() => handleBtnSlider("right")}><FaChevronCircleLeft/></button>
                </div>
            </div>
            <div className="carrousel-container">

                <div className="carrousel-content" style={{transform: `translateX(${carrouselTranslate}em)`}}>

                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    <CardProduct />
                    

                </div>

            </div>
        </section>
    )
}