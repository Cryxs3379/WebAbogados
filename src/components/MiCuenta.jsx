// src/components/MiCuenta.jsx
import './MiCuenta.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebaseConfig';

const MiCuenta = () => {
  const [user] = useAuthState(auth);

  return (
    <div className="container">
      <h1>Mi Cuenta</h1>
      {user && (
        <div>
          <p>Email: {user.email}</p>
          <p>UID: {user.uid}</p>
        </div>
      )}
    </div>
  );
};

export default MiCuenta;

