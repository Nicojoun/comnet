// import React from 'react';
import '../../assets/styles/Home.scss';
// import Banner from '../../components/Banner';  
// import logements from '../../datas/logements.json'; 
// import Card from '../../components/Card';  
// import { Link } from 'react-router-dom'; 
import Logo from '../../components/Logo';

function Home() {
  return (
    <div className='home'>
      <Logo />
      {/* <Banner bannerClass='home-banner' bannerText='Chez vous, partout et ailleurs' />  
      <div className='home-housing'> 
        {logements.map(logement => (
          <Link className='home-linkHousing' key={logement.id} to={`/housing/${logement.id}`}> 
            <Card cardSrc={logement.cover} 
              cardTitle={logement.title}
              cardAlt={logement.title} 
            /> 
          </Link>
        ))}
      </div> */}
    </div>
  );
}

export default Home;