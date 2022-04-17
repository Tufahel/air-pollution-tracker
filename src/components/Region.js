import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowRight } from '@fortawesome/free-solid-svg-icons';
import { getCountries } from '../redux/Actions/Country';
import Africa from '../assets/Africa.png';
import Americas from '../assets/Americas.png';
import Asia from '../assets/Asia.png';
import Oceania from '../assets/Oceania.png';
import Europe from '../assets/Europe.png';
import Antarctic from '../assets/Antarctic.png';

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
  else region1 = Antarctic;
  return (
    <div className="col-6 border">
      <div className="region d-flex justify-content-between">
        <div className="d-flex flex-column">
          <img src={region1} alt="" className="m-2 img" />
          <div>
            <p>
              {region}
            </p>
            <p>
              {regionCountry}
              {' '}
              Countries
            </p>
          </div>
        </div>
        <div>
          <button
            key={region}
            type="button"
            className="btn mt-2"
            onClick={() => {
              dispatch(getCountries(region));
            }}
            to="/countries"
          >
            <NavLink to="/countries" className="link m-2 text-light">
              <FontAwesomeIcon icon={faCircleArrowRight} className="icon" />
            </NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};
Region.propTypes = {
  region: PropTypes.string.isRequired,
  regionCountry: PropTypes.number.isRequired,
};

export default Region;
