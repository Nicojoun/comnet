import { Link } from 'react-router-dom'; 
import '../../assets/styles/NotFound.scss';

function NotFound() {
  return (
    <div className='notFound' >
      <span className='notFound-404'>404</span>
      <div className='notFound-text'>
        <span className='notFound-message'>Oups! La page que vous demandez n'existe pas.</span>
        <Link to='/' className='notFound-linkBackHome'> 
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  );
}

export default NotFound;