import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCountries } from '../redux/Actions/Country';
import Country from './Country';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);
  return (
    <div>
      <Country
        key="1"
        id="1"
        name="name"
        region="region"
      />
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
          />
        ))
      }
    </div>
  );
};

export default Countries;
