import React, { createContext, useState, useEffect } from 'react';
import useHttp from '../hooks/use-http';
import { placeOrderFromCart } from '../lib/api';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart: () => { },
    placeOrder: () => { },
    status: null,
    error: null,
    data:null
});

export const CartContextProvider = (props) => {
    
    const intialCart = JSON.parse(window.localStorage.getItem("cart") || '[]');

    const [cart, setCart] = useState(intialCart);
    const { status,error,data,sendRequest } = useHttp(placeOrderFromCart);

    const addToCart = (item) => {

        const isPresent = cart.some((food) => food.id === item.id);

        if (isPresent) {
            setCart((prevState) => {
                return prevState.map((food) => food.id === item.id ? { ...food, qty: food.qty + 1 } : food);
            })
        } else {
            setCart((prevState) => [...prevState, item]);
        } 
    }    

    const placeOrder = () => {
        sendRequest(cart);
        setCart(() => []);
    }

    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart: addToCart,
        placeOrder: placeOrder,
        status: status,
        error: error,
        data:data
    }

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    return <CartContext.Provider value={context}>
        {props.children}
  </CartContext.Provider>
}

export default CartContext;