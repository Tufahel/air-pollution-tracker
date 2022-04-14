import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPollutionData } from '../redux/Actions/Pollution';
import Pollution from './Pollution';

const Pollutions = () => {
  const pollutions = useSelector((state) => state.pollutionReducer);
  const dispatch = useDispatch();
  // console.log(pollutions.coord);
  useEffect((lat, lng) => {
    dispatch(getPollutionData(lat, lng));
  }, []);

  return (
    <div>
      <Pollution
        key="1"
        id="1"
        components="1"
      />
      <Pollution
        key={pollutions.id}
        id={pollutions.id}
        lat={pollutions.lat}
        lng={pollutions.lng}
        co={pollutions.co}
        no={pollutions.no}
        no2={pollutions.no2}
      />
    </div>
  );
};

export default Pollutions;
