import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./CardProduct.scss"

export default function CardProduct({id, name, background, price}){
    return (
        <article className={`card-product`}>
            <div className={`card-product-image loading`} style={{backgroundImage: `${background ? `url(${background})` : ''}`}}>
                <button className="card-product-heart"><FaHeart/></button>

                <Link to={`/product/${id}`} className="btn btn-more"><FaEye /> Ver mais</Link>
            </div>
            <div className="card-product-infos">
                <p className="card-product-title">{name}</p>
                <div className="card-product-price">
                    <p className="sale">-50%</p>
                    <p className="price">{`R$ ${price ? price : ' '}`}</p>
                </div>
            </div>
        </article>
    )
}