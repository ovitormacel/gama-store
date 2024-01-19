import { Link } from "react-router-dom";
import "./CardProductSales.scss";
import { FaEye, FaRegHeart } from "react-icons/fa";

export default function CardProductSales({small}) {
    return (
        <article className="card-product-sales">
            <div className="card-product-sales-image">
                {/*<img src="src/assets/Marvel's Spider-Man Miles Morales.jpeg" alt="Capa - Spider Man Miles Morales" />*/}
            </div>
            <div className="card-product-sales-infos">
                <p className="sale">-50%</p>
                <div className="infos-sales-card">
                    <p className={`card-product-sales-title ${!small ? "isLarge" : ""}`}>Spider Man Miles Morales</p>
                    <p className="price">R$ 999,99</p>
                    {!small ? (
                        <div className="main-actions">
                            <Link to={"search/01"} className="btn btn-more"><FaEye /> Ver mais</Link>
                            <button className="btn btn-blank"><FaRegHeart /></button>
                        </div>
                    ) : null}
                    <div className="platforms">
                        <span className="span-platform blank">PS5</span>
                        <span className="span-platform light">PS4</span>
                    </div>
                </div>
            </div>
        </article>

        // <article className="card-product">
        // <div className="card-product-image">
        //     <button className="card-product-heart"><FaHeart/></button>
        //     <img src="src/assets/Marvel's Spider-Man Miles Morales.jpeg" alt="Capa - Spider Man Miles Morales" />
        //     <Link className="btn btn-more"><FaEye /> Ver mais</Link>
        // </div>
        // <div className="card-product-infos">
        //     <p className="card-product-title">Spider Man Miles Morales</p>
        //     <div className="card-product-price">
        //         <p className="sale">-50%</p>
        //         <p className="price">R$ 999,99</p>
        //     </div>
        // </div>
        // </article>
    )
}