import React from 'react';
import Header from './Header';
import Region from './Region';
import World from '../assets/world.png';

const Regions = () => {
  const regionList = [
    { region: 'Asia', country: 50 },
    { region: 'Americas', country: 56 },
    { region: 'Oceania', country: 27 },
    { region: 'Antarctic', country: 5 },
    { region: 'Europe', country: 53 },
    { region: 'Africa', country: 59 }];
  return (
    <div>
      <Header id="/" />
      <div className="world-container">
        <img src={World} alt="" className="world-map" />
        <div className="centered">
          <h4>Welcome to Air Pollution Tracker mobile webapp.</h4>
          <p>Explore air pollution data.</p>
        </div>
      </div>
      <div className="row m-4">
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
