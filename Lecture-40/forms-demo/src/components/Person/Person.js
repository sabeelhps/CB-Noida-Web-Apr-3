import React from 'react'
import "./Person.css";

const Person = ({ name, age, color }) => {
  return (
      <article className='person'>
          <h2>Name : {name}</h2>
          <h3>Age : {age}</h3>
          <p>My Fav Color : { color }</p>
    </article>
  )
}

export default Person