import '../../assets/styles/Logo.scss';
import logoImage from '../../image/logo.jpg';

function Logo() {
  return (
    <div className='logo'>
      <img className='logo-image' src={logoImage} alt='Logo' />
    </div>
  );
}

export default Logo;
