import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getPollutionData } from '../redux/Actions/Pollution';

const Country = (props) => {
  const {
    id, name, lat, lng, population, flag,
  } = props;
  const dispatch = useDispatch();

  return (
    <div className="col-6 border">
      <div>
        <button
          key={id}
          type="button"
          className="btn mt-2"
          onClick={() => {
            dispatch(getPollutionData(parseInt(lat, 10), parseInt(lng, 10), flag, name));
            console.log('lt lng: ', parseInt(lat, 10), parseInt(lng, 10));
          }}
        >
          <NavLink to="/pollution" className="link m-2 text-light d-flex">
            <div>
              <img src={flag} alt="flag" className="m-2" />
            </div>
            <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
          </NavLink>
        </button>
        <div className="m-2">
          <p>
            {name}
          </p>
          <p>
            {population}
          </p>
        </div>
      </div>
    </div>
  );
};
Country.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  flag: PropTypes.string.isRequired,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  population: PropTypes.number.isRequired,
};

export default Country;
