// src/components/AboutUs/AboutUs.jsx
import React from 'react';
import Carousel from '../Carousel/Carousel';
import './AboutUs.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <Carousel />
      <div className="about-us-content">
        <h1>About Us</h1>
        <p>Información sobre nosotros.</p>
      </div>
    </div>
  );
};

export default AboutUs;


