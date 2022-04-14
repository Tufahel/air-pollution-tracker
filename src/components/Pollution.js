import React from 'react';
import PropTypes from 'prop-types';

const Pollution = (props) => {
  const {
    id, lat, lng, co, no, no2,
  } = props;
  return (
    <div key={id} className="border">
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
