import "./ShoppingCart.scss";

import { FaMoneyBillWave, FaRegTrashAlt } from "react-icons/fa";

export default function ShoppingCart({state}){

    return (
        <div className={`shopping-cart ${state ? "active" : ""}`}>
            <ul className="shopping-cart-list">
                <h2 className="section-title">Carrinho de Compras</h2>
                <p className="total-items">2 Itens</p>
                <ShoppingCartItem />
                <ShoppingCartItem />
            </ul>
            <div className="finish-value">
                <p className="total-items">Valor Total</p>
                <p className="section-title">R$ 563,99</p>
            </div>
            <button className="btn-finish"><FaMoneyBillWave />Finalizar Compra</button>
        </div>
    )
}

//Shopping Cart Item
function ShoppingCartItem(){
    return (
        <li className="cart-item">
            <div className="cart-item-col1">
                <div className="cart-item-image" style={{backgroundImage: `url("/src/assets/Marvel's Spider-Man Miles Morales.jpeg")`}}></div>
                <div className="cart-item-infos">
                    <p className="card-item-name">Spider Man Miles Morales</p>
                    <p className="card-item-price">R$ 248.99</p>
                </div>
            </div>
            <button className="card-item-remove"><FaRegTrashAlt /></button>
        </li>
    )
}
