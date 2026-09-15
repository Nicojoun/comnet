import '../../assets/styles/Connect.scss';
import { Link, useNavigate } from 'react-router-dom';
import logoImage from '../../image/logo.jpg';
import { useEffect, useState } from 'react';

const AUTH_STORAGE_KEY = 'comnet.user';

function getConnectedUser() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY));
  } catch {
    return null;
  }
}

function Connect() {
  const navigate = useNavigate();
  const [connectedUser, setConnectedUser] = useState(getConnectedUser);

  useEffect(() => {
    const updateConnectionStatus = () => setConnectedUser(getConnectedUser());

    window.addEventListener('comnet-auth-change', updateConnectionStatus);
    window.addEventListener('storage', updateConnectionStatus);

    return () => {
      window.removeEventListener('comnet-auth-change', updateConnectionStatus);
      window.removeEventListener('storage', updateConnectionStatus);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem(AUTH_STORAGE_KEY);
    window.dispatchEvent(new Event('comnet-auth-change'));
    navigate('/');
  };

  return (
    <div className='connect'>
      <img className='connect-logo' src={logoImage} alt='Logo' />
      {connectedUser ? (
        <>
          <span className='connect-user-login'>{connectedUser.login}</span>
          <button type='button' className='connect-link' onClick={handleLogout}>
            DÉCONNEXION
          </button>
        </>
      ) : (
        <Link to='/login' className='connect-link'>
          CONNEXION
        </Link>
      )}
    </div>
  );
}

export default Connect;
