import '../../assets/styles/Research.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

function Research({
  value,
  onChange,
  placeholder = 'Rechercher une catégorie',
  ariaLabel = 'Rechercher une catégorie',
}) {
  return (
    <div className="research-field">
      <FontAwesomeIcon className="research-icon" icon={faSearch} />
      <input
        className="research"
        type="search"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        aria-label={ariaLabel}
      />
    </div>
  );
}

export default Research;
