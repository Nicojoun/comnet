import React, { useState } from 'react';
import '../../assets/styles/Slideshow.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Importer les icônes

function Slideshow({images}) {
  const [currentSlide, setCurrentSlide] = useState(0); // Gestion de l'index de l'item actuelle
  const totalSlides = React.Children.count(images); // Nombre total de slides (enfants)

  const prevSlide = () => {
    // Passer à l'item précédent, en bouclant à la fin si on est au premier item
    const prevIndex = currentSlide - 1 < 0 ? totalSlides - 1 : currentSlide - 1;
    setCurrentSlide(prevIndex);
  };
  
  const nextSlide = () => {
    // Passer à l'item suivant, en bouclant au début si on est au dernier item
    const nextIndex = currentSlide + 1 >= totalSlides ? 0 : currentSlide + 1;
    setCurrentSlide(nextIndex);
  };  

  return (
    <div className='slideshow' style={{ backgroundImage: `url(${images[currentSlide]})`, backgroundSize: 'cover',}} >
      <div className='slideshow-chevrons' >
        <FontAwesomeIcon icon={faChevronLeft} onClick={prevSlide} className='slideshow-chevronPrev' />
        <FontAwesomeIcon icon={faChevronRight} onClick={nextSlide} className='slideshow-chevronNext' />
      </div>
      {/* Affichage du numéro de slide */}
      <div className='slideshow-number' >
        {currentSlide + 1}/{totalSlides}
      </div>
    </div>
  );
}

export default Slideshow;
