import { useState } from 'react';
import './App.css';
import Cat from './components/Cat';
import Dog from './components/Dog';
import Person from './components/Person';
import { Routes,Route,Link } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <nav>
        <ul>
          <li><Link to="/person">Person</Link></li>
          <li><Link to="/cat">Cat</Link></li>
          <li><Link to="/dog">Dog</Link></li>
        </ul>
      </nav>
      <Routes>
          <Route path='/person' element={<Person/>} />
          <Route path='/cat' element={<Cat/>} />
          <Route path='/dog' element={<Dog />} />
          <Route path='/person/:personId' element={<Person/>} />
      </Routes>
    </div>
  );
}

export default App;
