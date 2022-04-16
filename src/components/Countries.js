import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRefresh } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Country from './Country';
import Header from './Header';
import Africa from '../assets/Africa.png';
import Americas from '../assets/Americas.png';
import Asia from '../assets/Asia.png';
import Oceania from '../assets/Oceania.png';
import Europe from '../assets/Europe.png';
import Antarctic from '../assets/Antarctic.png';

const Countries = () => {
  const countries = useSelector((state) => state.countryReducer);
  if (!countries.length) {
    return (
      <div className="m-2">
        <p>Please wait, Loading...</p>
        <NavLink to="/" className="link text-light">
          <p>If not working, click to reload</p>
          <FontAwesomeIcon icon={faRefresh} className="icon" text="reload" />
        </NavLink>
      </div>
    );
  }
  let region1 = countries[0].region;
  if (region1 === 'Africa') region1 = Africa;
  else if (region1 === 'Asia') region1 = Asia;
  else if (region1 === 'Europe') region1 = Europe;
  else if (region1 === 'Oceania') region1 = Oceania;
  else if (region1 === 'Americas') region1 = Americas;
  else region1 = Antarctic;
  return (
    <div>
      <Header id="/" />
      <div className="row m-4">
        <div className="col-12 d-flex justify-content-center align-items-center border gap-4">
          <h3>{countries[0].region}</h3>
          <img src={region1} alt="" className="m-2 img1" />
        </div>
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
