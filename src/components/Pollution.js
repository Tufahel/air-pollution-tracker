import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Pollution = (props) => {
  const {
    id, lat, lng, co, no, no2, flag,
  } = props;
  return (
    <div className="border">
      <div className="mt-2">
        <img src={flag} alt="img" />
      </div>
      <button
        key={id}
        type="button"
        className="btn btn-primary mt-2"
      >
        <NavLink to="/countries" className="link m-2 text-light">Back</NavLink>
      </button>
      <p>
        id:
        {' '}
        {id}
      </p>
      <p>
        lat:
        {' '}
        {lat}
        , lng:
        {lng}
      </p>
      <p>
        components:
        {' '}
        co:
        {' '}
        {co}
        {' '}
        no:
        {' '}
        {no}
        {' '}
        no2:
        {' '}
        {no2}
      </p>
    </div>
  );
};
Pollution.propTypes = {
  id: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  co: PropTypes.string.isRequired,
  no: PropTypes.string.isRequired,
  no2: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
};
export default Pollution;
