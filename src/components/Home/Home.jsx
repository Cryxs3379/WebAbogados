// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import Carousel from '../Carousel/Carousel';

const Home = () => {
  return (
    <>
    <div className="home">
      <Carousel />
      <h1>Alejandro Asensio </h1>
     <h2>Fisioterapeuta</h2>
      <h3>¿En que podemos ayudarte?.</h3>
      
    </div>
    </>
  );
};

export default Home;
