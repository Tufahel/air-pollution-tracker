import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getCountries } from '../redux/Actions/Country';
// import Pollutions from './Pollutions';

const Region = (props) => {
  const { region, regionCountry } = props;
  const dispatch = useDispatch();
  return (
    <div className="border">
      <button
        key={region}
        type="button"
        className="btn btn-primary"
        onClick={() => {
          dispatch(getCountries(region));
        }}
      >
        <NavLink to="/countries" className="link m-2 text-light">Details</NavLink>
      </button>
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
