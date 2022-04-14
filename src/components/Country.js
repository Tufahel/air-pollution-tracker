import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    id, name, region, lat, lng, population,
  } = props;
  return (
    <div key={id} className="border">
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
        {lat}

        lng:
        {lng}
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
