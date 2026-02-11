import '../../assets/styles/Connect.scss';
import { Link } from 'react-router-dom';

function Connect() {
  return (
    <div className='connect'>
      <Link to='/login' className='connect-link'>
        CONNEXION
      </Link>
    </div>
  );
}

export default Connect;
