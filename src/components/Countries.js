import React from 'react';
import { useSelector } from 'react-redux';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducer);
  if (!countries.length) {
    return (
      <p>loading</p>
    );
  }
  return (
    <div>
      {
        countries.map((country) => (
          <Country
            key={country.code}
            id={country.code}
            name={country.name.common}
            lat={country.latlng[0]}
            lng={country.latlng[1]}
            population={country.population}
            region={country.region}
            flag={country.flag}
          />
        ))
      }
    </div>
  );
};

export default Countries;
