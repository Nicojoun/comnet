import '../../assets/styles/Entrer.scss';
import { Link } from 'react-router-dom';

function Entrer() {
  return (
    <div className='entrer'>
      <Link to="/categories">
        <span className='entrer-text'>ENTRER</span>
      </Link>
    </div>
  );
}

export default Entrer;