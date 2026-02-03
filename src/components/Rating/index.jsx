import React from 'react';
import '../../assets/styles/Rating.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faStar } from '@fortawesome/free-solid-svg-icons'; // Importer l'icône étoile solide

function Rating({ rating }) {
  const stars = [];
  
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span key={i} className={`empty ${i <= rating ? 'filled' : ''}`}>
        <FontAwesomeIcon icon={faStar} />
      </span>
    );
  }

  return (
    <div className='rating'>
      {stars}
    </div>
  );
}

export default Rating;
