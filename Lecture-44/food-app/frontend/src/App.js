import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout';
import AllFoods from './pages/AllFoods';
import MyCart from './pages/MyCart';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/allfoods" element={ <AllFoods/>} />
        <Route path="/mycart" element={ <MyCart/>} />
      </Routes>
    </Layout>
  );
}

export default App;
