// src/components/Home/Home.jsx
import React from 'react';
import './Home.css';
import Carousel from '../Carousel/Carousel';

const Home = () => {
  return (
    <div className="home">
      <Carousel />
      <h1>MBC Abogados</h1>
      <p>¿En que podemos ayudarte?.</p>
    </div>
  );
};

export default Home;
