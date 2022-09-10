import Person from './components/Person';
import LearnJSX from './components/LearnJSX';
import TodoList from './components/TodoList';

// Functional component
function App() {

    const persons = [
      {
        name: "Mayank",
        age: 23,
        favColor:'green'
      },
      {
        name: "Himanshu",
        age: 21,
        favColor:'Blue'
      },
      {
        name: "Sarthak",
        age: 22,
        favColor:'Light Green'
      }
    ]



  return <section>
    
      {persons.map((person,idx) => {
        return <Person key={idx} name={ person.name } age={person.age} favColor={person.favColor} />
      })}
    </section>
}


export default App;

