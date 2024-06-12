// src/components/Nosotros/Nosotros.jsx
import React from 'react';
import './Localizanos.css';
import CarouselComponent from '../Carousel/Carousel';
import { Box, Typography, IconButton } from '@mui/material';
import { LocationOn } from '@mui/icons-material';

const Localizanos = () => {
  const handleMapClick = () => {
    window.open('https://www.google.com/maps?q=Your+Address+Here', '_blank');
  };

  return (
    <Box className="localizanos">
      <CarouselComponent />
      <Box className="localizanos-content" sx={{ textAlign: 'center', padding: '2rem', borderRadius: '15px', backgroundColor: 'rgba(255, 255, 255, 0.8)', boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)' }}>
        <Typography variant="h1" gutterBottom>
          Localízanos
        </Typography>
        <Typography variant="body1" paragraph>
          Encuentra nuestra ubicación en el mapa.
        </Typography>
        <IconButton onClick={handleMapClick} color="primary" aria-label="google maps">
          <LocationOn fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Localizanos;


