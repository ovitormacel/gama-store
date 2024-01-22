import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./CardProduct.scss"

export default function CardProduct(){
    return (
        <article className="card-product">
            <div className="card-product-image">
                <button className="card-product-heart"><FaHeart/></button>
                <img src="src/assets/Marvel's Spider-Man Miles Morales.jpeg" alt="Capa - Spider Man Miles Morales" />
                <Link to={'/search/001'} className="btn btn-more"><FaEye /> Ver mais</Link>
            </div>
            <div className="card-product-infos">
                <p className="card-product-title">Spider Man Miles Morales</p>
                <div className="card-product-price">
                    <p className="sale">-50%</p>
                    <p className="price">R$ 999,99</p>
                </div>
            </div>
        </article>
    )
}