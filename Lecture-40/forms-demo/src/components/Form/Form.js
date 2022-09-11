import React,{useState,useRef} from 'react'
import "./Form.css";
import { v4 as uuid } from 'uuid';

const Form = (props) => {

    const nameInpRef = useRef();
    const ageInpRef = useRef();
    const colorInpRef = useRef();

    // const [name,setName] = useState('');
    // const [age,setAge] = useState(0);
    // const [color, setColor] = useState('');
    
    // const nameChangeHandler = (event) => {
    //     setName(event.target.value);
    // }

    // const ageChangeHandler = (event) => {
    //     setAge(event.target.value);
    // }

    // const colorChangeHandler = (event) => {
    //     setColor(event.target.value);
    // }


    const formSubmitHandler = (e) => {
        e.preventDefault();
        // perform validation on person

        const name = nameInpRef.current.value;
        const age = ageInpRef.current.value;
        const color = colorInpRef.current.value;

        props.addPerson({ id: uuid(), name, age, favColor: color });
        // setName('');
        // setAge(0);
        // setColor('');
        nameInpRef.current.value = "";
        ageInpRef.current.value = "";
        colorInpRef.current.value = "";
    }


  return (
      <form onSubmit={formSubmitHandler} className='form'>
        <div>
            <label htmlFor="name">Name</label>
              <input type="text" placeholder="Name" id="name" ref={ nameInpRef} />
        </div>
        <div>
            <label htmlFor="name">Age</label>
              <input type="number" placeholder="Age" id="age" ref={ ageInpRef} />
        </div>
        <div>
            <label htmlFor="color">Color</label>
              <input type="text" placeholder="Fav Color" id="color" ref={colorInpRef} />
        </div>
        <button>Submit</button>
    </form>
  )
}

export default Form;