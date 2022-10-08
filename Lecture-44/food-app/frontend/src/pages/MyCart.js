import React,{useContext} from 'react';
import CartContext from '../store/cart-context';
import styles from "./MyCart.module.css";

const MyCart = () => {

  const { cart } = useContext(CartContext);
  
  const totalPrice = cart.reduce((total, food) => total + food.qty * food.price, 0);

  return (
     <ul className={styles.cart}>
            <li>My Cart</li>
            {
                cart.map((item,idx) => {

                   return <li key={idx}>
                        <p className={styles['item-name']}>{ item.name} <span className={styles['item-qty']}>x { item.qty}</span></p>
                        <p className={styles['item-desc']}>{ item.desc}</p>
                        <p className={styles['item-price']}>$ {item.price}</p>
                       <button>-</button>
                       <button>+</button>
                       <button className={styles['remove-btn']}>remove</button>
                    </li>
                })
            }
            <li>Total: {totalPrice}  <span className={styles['place-order-btn']}><button>Place Order</button></span> </li>
        </ul>
  )
}

export default MyCart;