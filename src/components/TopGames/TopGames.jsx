import { Link } from "react-router-dom";
import "./TopGames.scss"

//ICONS
import { FaRegHeart } from "react-icons/fa";

export default function TopGames() {
    return (
        <div className="slider-container">
            <div className="slider-content">
                <div className="slider-item">
                    <img src="src/assets/The Last of Us.jpeg" alt="" />
                    <div className="slider-item-infos">
                        <h2 className="title">The Last of Us Part II</h2>
                        <div className="price">
                            <p className="sale">-50%</p>
                            <p className="price-value">R$ 249.90</p>
                        </div>
                        <div className="actions">
                            <Link to={"search/01"}>Ver mais</Link>
                            <button className="add-wishlist"><FaRegHeart /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}