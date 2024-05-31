// src/components/Home.jsx
import './Home.css';
import CarouselComponent from './Carousel';
const Home = () => {
  return (
    
    <div>
        <CarouselComponent/>
        
    <div className="header-overlay">
    
        <h1>MBC Abogados</h1>
      </div>
      <div className="help-text">
        ¿En qué podemos ayudarte?
      </div>
      <div className="arrow-down">
        <svg width="100" height="100" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 16L6 10H18L12 16Z" fill="white"/>
        </svg>
      </div>
      
    </div>
  );
};

export default Home;

