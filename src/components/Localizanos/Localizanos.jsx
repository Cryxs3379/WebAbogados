// src/components/Nosotros/Nosotros.jsx
import React from 'react';
import Carousel from '../Carousel/Carousel';
import './Localizanos.css';

const Localizanos = () => {
  return (
    <div className="nosotros">
      <Carousel />
      <div className="nosotros-content">
        <h1>Nosotros</h1>
        <p>Información sobre nosotros.</p>
      </div>
    </div>
  );
};

export default Localizanos;
