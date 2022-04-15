import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountries } from '../redux/Actions/Country';
import Africa from '../assets/Africa.png';
import Americas from '../assets/Americas.png';
import Asia from '../assets/Asia.png';
import Oceania from '../assets/Oceania.png';
import Europe from '../assets/Europe.png';

// import Pollutions from './Pollutions';

const Region = (props) => {
  const { region, regionCountry } = props;
  const dispatch = useDispatch();
  let region1;
  if (region === 'Africa') region1 = Africa;
  else if (region === 'Asia') region1 = Asia;
  else if (region === 'Europe') region1 = Europe;
  else if (region === 'Oceania') region1 = Oceania;
  else if (region === 'Americas') region1 = Americas;
  else region1 = Asia;
  return (
    <div className="border">
      <button
        key={region}
        type="button"
        className="btn btn-primary mt-2"
        onClick={() => {
          dispatch(getCountries(region));
        }}
      >
        <NavLink to="/countries" className="link m-2 text-light">Details</NavLink>
      </button>
      <div>
        <img src={region1} alt="" className="w-25 m-2" />
      </div>
      <p>
        region:
        {region}
      </p>
      <p>
        countries:
        {regionCountry}
      </p>
    </div>
  );
};
Region.propTypes = {
  region: PropTypes.string.isRequired,
  regionCountry: PropTypes.number.isRequired,
};

export default Region;
