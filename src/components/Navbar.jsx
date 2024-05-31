// src/components/Navbar.jsx
import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const Navbar = () => {
    
  const [user] = useAuthState(auth);

  const handleLogout = async () => {
    await auth.signOut();
  };

  return (
    <nav>
      <ul>
        <li><NavLink to="/">Inicio</NavLink></li>
        <li><NavLink to="/about">Sobre nosotros</NavLink></li>
        <li><NavLink to="/nosotros">Servicios</NavLink></li>
        {user ? (
          <>
            <li><NavLink to="/mi-cuenta">Mi Cuenta</NavLink></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </>
        ) : (
          <>
            <li><NavLink to="/login">Login</NavLink></li>
            <li><NavLink to="/register">Register</NavLink></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;

