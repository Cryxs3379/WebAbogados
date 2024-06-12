import React from 'react';
import './Servicios.css';
import CarouselComponent from '../Carousel/Carousel';

const Servicios = () => {
  return (
    <div className="servicios">
        <CarouselComponent/>
      <div className="servicios-content">
        <h1>Servicios</h1>
        <p>Información sobre nuestros servicios.</p>
      </div>
    </div>
  );
};

export default Servicios;
