// src/components/Carousel/Carousel.jsx
import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/massage.jpg';
 import image2 from '../../assets/massage.jpg';
import './Carousel.css';

const images = [image1, image2];

const CarouselComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const applyZoom = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = 'transform 120s linear';
        imageRef.current.style.transform = 'scale(1.1,2)';
      }
    };

    if (imageRef.current) {
      imageRef.current.style.transition = 'none';
      imageRef.current.style.transform = 'scale(1)';
      setTimeout(applyZoom, 50);
    }

    const changeImageTimeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 40000);

    return () => {
      clearTimeout(changeImageTimeout);
    };
  }, [currentImageIndex]);

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="MBC Abogados" ref={imageRef} />
    </div>
  );
};

export default CarouselComponent;




