import './App.css';
import Button from './components/Button';
import Happy from './components/Happy';
import Hello from './components/Hello';
import Login from './components/Login/Login';
import PersonList from './components/PersonList/PersonList';

function App() {
  return (
    <div className="App">
      <Login/>
      {/* <Happy/> */}
      {/* <Hello name="Mayank">
        <h2>This text is wraped inside Hello component</h2>
        <p>This is some paragraph!</p>
      </Hello>
      <Button color="blue" btnText="Primary"/>
      <Button color="gray" btnText="Secondary"/>
      <Button color="red" btnText="Danger"/>
      <Button color="yellow" btnText="Warning"/> */}

      {/* <PersonList/> */}
    </div>
  );
}

export default App;
