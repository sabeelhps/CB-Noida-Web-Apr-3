import React,{createContext,useState,useEffect} from 'react';

const CartContext = createContext({
    cart: [],
    cartLength: 0,
    addToCart:()=>{}
});

export const CartContextProvider = (props) => {
    
    const intialCart = JSON.parse(window.localStorage.getItem("cart") || '[]');

    const [cart, setCart] = useState(intialCart);

    console.log(cart);

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

    const context = {
        cart: cart,
        cartLength: cart.length,
        addToCart:addToCart
    }

    useEffect(() => {
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);
    
    return <CartContext.Provider value={context}>
        {props.children}
  </CartContext.Provider>
}

export default CartContext;