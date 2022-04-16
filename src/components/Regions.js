import React from 'react';
import Header from './Header';
import Region from './Region';

const Regions = () => {
  const regionList = [
    { region: 'Asia', country: 50 },
    { region: 'Americas', country: 56 },
    { region: 'Oceania', country: 27 },
    { region: 'Antarctic', country: 5 },
    { region: 'Europe', country: 53 },
    { region: 'Africa', country: 59 }];
  // const regionCountry = ['50', '56', '27', '5', '53', '59'];
  return (
    <div>
      <Header id="/" />
      <div className="row">
        {
            regionList.map((element) => (
              <Region
                key={element.region}
                region={element.region}
                regionCountry={element.country}
              />
            ))
        }
      </div>
    </div>
  );
};

export default Regions;
