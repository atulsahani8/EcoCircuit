import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Header from './Containers/Header/Header';
import Footer from './Components/Footer/Footer'; 
import Login from './Containers/Login/Login';
import Register from './Containers/Register/Register';


const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
