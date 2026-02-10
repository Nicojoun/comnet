import React from 'react';
import '../../assets/styles/Categories.scss';
import Caterolink from '../../components/Caterolink';
import Research from '../../components/Research';

function Categories() {
  return (
    <div className='categories'>
      <Research />
      <h1 style={{color: 'blue'}}>catégories</h1>
      <Caterolink text="F.A.Q." />
      <Caterolink text="INFO" />
      <Caterolink text="METEO" />
      <Caterolink text="SERVICES" />
    </div>
  );
}

export default Categories;

