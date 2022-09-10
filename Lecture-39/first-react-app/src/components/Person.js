import React,{useState} from 'react';
import './Person.css';

const Person = (props) => {

  // let name = props.name;

  const [name, setName] = useState(props.name);
  const [age, setAge] = useState(props.age);
  
  const cardClickHandler = () => {
    setName("Anonymous!");
  }

  const updateAgeHandler = (e) => {
    e.stopPropagation();
    setAge(age + 1);
  }
 
  return (
    <article onClick={cardClickHandler} className="person">
      <h2>Name : { name}</h2>
      <h3>Age : { age}</h3>
      <p>My Fav Color : {props.favColor}</p>
      <button onClick={updateAgeHandler}>Update Age!</button>
    </article>
  )
}

export default Person;