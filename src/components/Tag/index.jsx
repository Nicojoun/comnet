import '../../assets/styles/Tag.scss';
import React from 'react';

const Tag = ({ text }) => {
  return (
    <span className='tag'>
      {text}
    </span>
  );
};

export default Tag;
