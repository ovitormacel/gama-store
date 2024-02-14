import { useContext, useEffect, useState } from "react";
import "./ShoppingCart.scss";

import { FaMoneyBillWave, FaRegTrashAlt } from "react-icons/fa";
import { CartContext } from "../../contexts/cart";

export default function ShoppingCart({state}){

    const {cart} = useContext(CartContext);
    const [cartElement, setCartElement] = useState();
    const [totalPrice, setTotalPrice] = useState();

    const getTotalPrice = (storage) => {
        let final = 0;

        if(storage){
            storage?.forEach((item) => {
                final += Number(item.price);
            })
        }

        setTotalPrice(final.toFixed(2));
    }

    const getShoppingCart = () => {
        const storage = JSON.parse(localStorage.getItem("gama-shopping-cart"));

        setCartElement(storage);
        getTotalPrice(storage);
    }

    useEffect(() => {
        getShoppingCart();
    }, [cart]);

    return (
        <div className={`shopping-cart ${state ? "active" : ""}`}>
            <ul className="shopping-cart-list">
                <h2 className="section-title">Carrinho de Compras</h2>
                <p className="total-items">{cart ? `${cart.length} Itens` : ''}</p>
                {cartElement ? cartElement.map((item) => (
                    <ShoppingCartItem key={item.id} item={item}/>
                )) : ""}
            </ul>
            <div className="finish-value">
                <p className="total-items">Valor Total</p>
                <p className="section-title">R$ {totalPrice}</p>
            </div>
            <button className="btn-finish"><FaMoneyBillWave />Finalizar Compra</button>
        </div>
    )
}

//Shopping Cart Item
function ShoppingCartItem({item}){

    //Remove Item from Shopping Cart
    const {setCart} = useContext(CartContext);

    const handleRemoveItem = (itemId) => {
        const cartStorage = JSON.parse(localStorage.getItem("gama-shopping-cart"));

        if(cartStorage != null){
            let hasGame = false;

            cartStorage?.forEach((game) => {
                if(game.id === itemId){
                    hasGame = true;
                }
            })

            if(hasGame){
                const newCart = cartStorage?.filter((game) => {
                    return game.id != itemId;
                });

                localStorage.setItem("gama-shopping-cart", JSON.stringify(newCart));
                setCart(newCart);

                return;
            }
        }
    }

    return (
        <li className="cart-item">
            <div className="cart-item-col1">
                <div className="cart-item-image" style={{backgroundImage: `url(${item.cover})`}}></div>
                <div className="cart-item-infos">
                    <p className="card-item-name">{item.name}</p>
                    <p className="card-item-price">R$ {item.price}</p>
                </div>
            </div>
            <button className="card-item-remove" onClick={() => handleRemoveItem(item.id)}><FaRegTrashAlt /></button>
        </li>
    )
}
