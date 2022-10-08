import React,{useContext} from 'react'
import styles from './Food.module.css';
import CartContext from '../../store/cart-context';

const Food = (props) => {

    // Consuming the cart context
    const cartContext = useContext(CartContext);

    const addItemToCartHandler = () => {
        cartContext.addToCart({
            id: props.id,
            name: props.name,
            price: props.price,
            desc: props.desc,
            qty:1
        })
    }

    return (
        <li className={styles.food}>
            <div>
                <p className={styles.name}>{props.name}</p>
                <p className={styles.desc}>{props.desc}</p>
                <p className={styles.price}>${ props.price}</p>
            </div>
            <div>
                <label>Amount</label>
                <input
                    type="number"
                    min="1"
                    defaultValue={1}
                />
                <button onClick={addItemToCartHandler} className={styles['add-btn']}>+ Add</button>
            </div>
        </li>
    )
}

export default Food