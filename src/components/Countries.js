import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Country from './Country';
import Header from './Header';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducer);
  if (!countries.length) {
    return (
      <div className="m-4">
        <p>Please wait, Loading...</p>
        <NavLink to="/" className="link text-light">
          <p>If not working, click to reload</p>
          <FontAwesomeIcon icon={faRefresh} className="icon" text="reload" />
        </NavLink>
      </div>
    );
  }
  return (
    <div>
      <Header id="/" />
      <div className="row">
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
    </div>
  );
};

export default Countries;
