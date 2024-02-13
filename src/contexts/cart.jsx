import { createContext, useState } from "react";

export const CartContext = createContext({});

export const CartProvider = ({children}) => {
    
    const [cart, setCart] = useState();

    const getShoppingCart = () => {
        const storage = JSON.parse(localStorage.getItem("gama-shopping-cart"));

        setCart(storage);
    }

    return(
        <CartContext.Provider value={{cart, setCart, getShoppingCart}}>
            {children}
        </CartContext.Provider>
    )
}