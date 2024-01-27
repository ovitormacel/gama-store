import { FaHeart, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";

import "./CardProduct.scss"

export default function CardProduct({id, name, background}){
    return (
        <article className={`card-product`}>
            <div className={`card-product-image ${id ? 'loading' : ''}`} style={{backgroundImage: `url(${background})`}}>
                <button className="card-product-heart"><FaHeart/></button>

                <Link to={`/search/${id}`} className="btn btn-more"><FaEye /> Ver mais</Link>
            </div>
            <div className="card-product-infos">
                <p className="card-product-title">{name}</p>
                <div className="card-product-price">
                    <p className="sale">-50%</p>
                    <p className="price">R$ 999,99</p>
                </div>
            </div>
        </article>
    )
}