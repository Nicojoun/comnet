import '../../assets/styles/Connect.scss';
import { Link } from 'react-router-dom';
import logoImage from '../../image/logo.jpg';

function Connect() {
  return (
    <div className='connect'>
      <img className='connect-logo' src={logoImage} alt='Logo' />
      <Link to='/login' className='connect-link'>
        CONNEXION
      </Link>
    </div>
  );
}

export default Connect;
