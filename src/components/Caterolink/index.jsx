import '../../assets/styles/Caterolink.scss';
import { Link } from 'react-router-dom';

function Caterolink({ text }) {
  const getRoute = (text) => {
    switch(text) {
      case 'F.A.Q.': return '/question';
      case 'INFO': return '/about';
      case 'METEO': return '/meteo';
      case 'SERVICES': return '/services';
      default: return '/';
    }
  };

  return (
    <div className='caterolink'>
      <Link to={getRoute(text)}>
        <span className='caterolink-text'>{text}</span>
      </Link>
    </div>
  );
}

export default Caterolink;
