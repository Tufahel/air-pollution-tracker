import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Pollution = (props) => {
  const {
    id, lat, lng, co, no, no2,
  } = props;
  return (
    <div className="border">
      <button
        key={id}
        type="button"
        className="btn btn-primary"
      >
        <NavLink to="/" className="link m-2 text-light">Back</NavLink>
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
};
export default Pollution;
