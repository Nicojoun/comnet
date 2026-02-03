import React, { useState } from 'react';
import '../../assets/styles/Collapse.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'; // Utiliser un seul icône

function Collapse({ title, content }) {
  const [open, setOpen] = useState(false); // Etat pour gérer l'ouverture/fermeture

  return (
    <div className='collapse' >
      <div className='collapse-title' onClick={() => setOpen(o => !o)} >
        <div>{title}</div>
        {/* Ajouter une classe pour gérer la rotation du chevron */}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`collapse-chevron ${open ? 'collapse-chevronRotate' : ''}`} // Appliquer la rotation conditionnellement
        />
      </div>
      {/* Contenu déroulant */}
      <div className={`collapse-content ${open ? 'collapse-open' : ''}`}>
        <div className='collapse-text'>{content}</div>
      </div>
    </div>
  );
}

export default Collapse;