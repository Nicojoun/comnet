import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import '../../assets/styles/About.scss';

const dataCollapse = [
  { title: 'Fiabilité', content: (<p>{'Description de la Fiabilité'}</p>) },
  { title: 'Respect', content: (<p>{'Description du respect'}</p>) },
  { title: 'Service', content: (<p>{'Description du Service'}</p>) },
  { title: 'Sécurité', content: (<p>{'Description de la Sécurité'}</p>) }
];

function About() {
  return (
    <div className='about'>
      <Banner bannerClass='about-banner' />
      {/* Boucle pour afficher chaque élément du tableau dans un Collapse */}
      <div className='about-collapse'>
      {dataCollapse.map((item, index) => (
        <Collapse 
          key={index} 
          title={item.title} 
          content={item.content} 
        /> 
      ))}
      </div>
    </div>
  );
} 

export default About;