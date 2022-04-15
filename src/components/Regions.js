import React from 'react';
import Region from './Region';

const Regions = () => {
  const regoinList = ['Asia', 'Americas', 'Oceania', 'Antarctic', 'Europe', 'Africa'];

  return (
    <div>
      {
            regoinList.map((element) => (
              <Region
                key={element}
                region={element}
              />
            ))
        }
    </div>
  );
};

export default Regions;
