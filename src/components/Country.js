import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { getPollutionData } from '../redux/Actions/Pollution';
// import Pollutions from './Pollutions';

const Country = (props) => {
  const {
    id, name, region, lat, lng, population,
  } = props;
  const dispatch = useDispatch();
  return (
    <div className="border">
      <button
        key={id}
        type="button"
        className="btn btn-primary"
        onClick={() => {
          dispatch(getPollutionData(parseInt(lat, 10), parseInt(lng, 10)));
          console.log('lt lng: ', parseInt(lat, 10), parseInt(lng, 10));
        }}
      >
        <NavLink to="/pollution" className="link m-2 text-light">Details</NavLink>
      </button>
      <p>
        id:
        {id}
      </p>
      <p>
        name:
        {name}
      </p>
      <p>
        lat:
        {parseInt(lat, 10)}

        lng:
        {parseInt(lng, 10)}
      </p>
      <p>
        population:
        {population}
      </p>
      <p>
        region:
        {region}
      </p>
    </div>
  );
};
Country.propTypes = {
  region: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;
