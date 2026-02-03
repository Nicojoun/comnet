import React from 'react';
import { useParams } from 'react-router-dom'; 
import logements from '../../datas/logements.json'; 
import '../../assets/styles/HousingSheet.scss';
import Collapse from '../../components/Collapse';
import Slideshow from '../../components/Slideshow';  
import Rating from '../../components/Rating'; 
import Tag from '../../components/Tag'; 
import Host from '../../components/Host';
import NotFound from '../NotFound';

function HousingSheet() {
  const { id } = useParams(); // Récupération de l'ID depuis les paramètres de l'URL
  const logement = logements.find(log => log.id === id); // Recherche du logement correspondant

  // Si le logement n'est pas trouvé, redirection vers la page NotFound
  if (!logement) {
    return <NotFound /> ; 
  }

  const dataCollapse = [
    { title: 'Description', content: (<p>{logement.description}</p> ) }, 
    { 
      title: 'Équipements', 
      content: (
        <ul>
          {logement.equipments.map((equipment, index) => (
            <li key={index} style={{listStyle: 'none', position: 'relative', right: '5%'}}>{equipment}</li>
          ))}
        </ul>
      ) 
    },
  ];

  return (
    <div className='housingSheet'>
      <div className='housingSheet-slide'>    
        <Slideshow images={logement.pictures} /> 
      </div>

        <div className='housingSheet-center'>

          <div className='housingSheet-left'>
            <div className='housingSheet-info'>
              <span className='housingSheet-title'>{logement.title}</span> 
              <h2 className='housingSheet-location'>{logement.location}</h2> 
            </div>
            <div className='housingSheet-tagList'>
              {logement.tags.map((tag, index) => (
              <Tag key={index} text={tag} />  
              ))}
            </div>
          </div>

          <div className='housingSheet-right'>
            {/* Affichage du nom et de la photo de l'hôte */}
            <div className='housingSheet-host'>
              <Host name={logement.host.name} picture={logement.host.picture} /> 
              {/* Affichage de la note sous forme d'étoiles */}
            </div>  
              <div className='housingSheet-rating'>
                <Rating rating={logement.rating} />
              </div>
          </div>

        </div>  

      <div className='housingSheet-wraper'>    
        {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
        {dataCollapse.map((item, index) => (
          <Collapse key={index} title={item.title} content={item.content} />    
        ))}
      </div>
    </div>
  );
}

export default HousingSheet;