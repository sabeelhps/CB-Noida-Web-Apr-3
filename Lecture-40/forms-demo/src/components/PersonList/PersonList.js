import React,{useState} from 'react';
import Person from '../Person/Person';
import { v4 as uuid } from 'uuid';
import Form from '../Form/Form';
import "./PersonList.css";
import useToggle from '../../hooks/useToggle';

const PersonList = () => {

    const DUMMY_PERSON_LIST = [
        {
            id:uuid(),
            name: 'Mayank',
            age: 23,
            favColor: 'Orange'
        },
        {
            id:uuid(),
            name: 'Himanshu',
            age: 21,
            favColor: 'Blue'
        },
        {
            id:uuid(),
            name: 'Sarthak',
            age: 22,
            favColor: 'Purple'
        },
        {
            id:uuid(),
            name: 'Gaurav',
            age: 21,
            favColor: 'Pink'
        }
    ];

    const [persons, setPersons] = useState(DUMMY_PERSON_LIST);
    
    const [displayForm, toggleDisplayForm]=useToggle(false);

    const addPerson = (person) => {
        // Not a good way of updating state
        // setPersons([...persons, person]);

        // Good Way 
        setPersons((prevState) => {
            return [...prevState, person];
        });
    }
    return (
        <section className="container">
            <h1>Persons List <span style={{float:'right'}}><button onClick={toggleDisplayForm}>Add</button></span></h1>
            {displayForm && <Form addPerson={addPerson} />}
            {persons.map((person) => {
                return <Person
                    key={person.id}
                    name={person.name}
                    age={person.age}
                    color={person.favColor}
                />
            })}

      </section>
    )
}

export default PersonList;