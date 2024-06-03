// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import Carousel from '../Carousel/Carousel';

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <h1>Inicio</h1>
      <p>Bienvenido a nuestro sitio web de abogados.</p>
    </div>
  );
};

export default Home;

