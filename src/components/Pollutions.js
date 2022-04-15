import React from 'react';
import { useSelector } from 'react-redux';
import Pollution from './Pollution';

const Pollutions = () => {
  const pollutions = useSelector((state) => state.pollutionReducer);
  // console.log(pollutions.coord);

  return (
    <div>
      <Pollution
        key={pollutions.id}
        id={pollutions.id}
        lat={pollutions.lat}
        lng={pollutions.lng}
        co={pollutions.co}
        no={pollutions.no}
        no2={pollutions.no2}
        flag={pollutions.flag}
      />
    </div>
  );
};

export default Pollutions;
