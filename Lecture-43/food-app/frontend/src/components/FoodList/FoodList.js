import React from 'react';
import Food from '../Food/Food';
import styles from './FoodList.module.css';

const FoodList = ({ foods }) => {
    console.log(foods);
  return (
      <ul className={styles['food-list']}>
          {
              foods.map((food) => {
                  return <Food
                      key={food._id}
                      name={food.name}
                      price={food.price}
                      desc={food.desc}
                  />
              })
          }
    </ul>
  )
}

export default FoodList;