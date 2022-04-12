import React from 'react';
import PropTypes from 'prop-types';

const Country = (props) => {
  const {
    id, name, region,
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
};

export default Country;
