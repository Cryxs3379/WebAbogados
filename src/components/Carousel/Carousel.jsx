import React, { useState, useEffect, useRef } from 'react';
import image1 from '../../assets/malagadenoche.jpg';
import image2 from '../../assets/city-7137958.jpg';
import './Carousel.css';

const images = [image1, image2];

const CarouselComponent = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const imageRef = useRef(null);

  useEffect(() => {
    const applyZoom = () => {
      if (imageRef.current) {
        imageRef.current.style.transition = 'transform 60s linear'; // Ajustar la velocidad del zoom
        imageRef.current.style.transform = 'scale(1.1,2)'; // Aplicar el zoom
      }
    };

    // Reiniciar el efecto de zoom al cambiar la imagen
    if (imageRef.current) {
      imageRef.current.style.transition = 'none';
      imageRef.current.style.transform = 'scale(1)';
      setTimeout(applyZoom, 100); // Aplicar el zoom después de un breve retraso
    }

    const changeImageTimeout = setTimeout(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 40000); // Cambiar imagen después de 40 segundos

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



