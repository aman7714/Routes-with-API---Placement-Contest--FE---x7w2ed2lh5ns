import React from 'react'
import '../styles/App.css';
import Navbar from './Navbar';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Top from './Top';
import Contact from './Contact';

const App = () => {

  return (
    <div id="main">
      <Navbar />
      <div className='container'>
        <Routes>
          <Route element={<Home/>} path='/'/>
          <Route element={<Top/>} path='/top-10'/>
          <Route element={<Contact/>} path='/contact'/>
        </Routes>
      </div>
    </div>
  )
}


export default App;
