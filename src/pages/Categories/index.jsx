import React, { useMemo, useState } from 'react';
import '../../assets/styles/Categories.scss';
import Caterolink from '../../components/Caterolink';
import Research from '../../components/Research';

function Categories() {
  const [query, setQuery] = useState('');
  const items = useMemo(() => ([
    'F.A.Q.',
    'INFO',
    'METEO',
    'SERVICES',
  ]), []);

  const filteredItems = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (!normalizedQuery) {
      return items;
    }
    return items.filter((item) => item.toLowerCase().startsWith(normalizedQuery));
  }, [items, query]);

  return (
    <div className='categories'>
      <Research
        value={query}
        onChange={(event) => setQuery(event.target.value)}
      />
      <h1 style={{color: 'blue'}}>catégories</h1>
      {filteredItems.map((item) => (
        <Caterolink key={item} text={item} />
      ))}
    </div>
  );
}

export default Categories;




