import { ADD_COUNTRY } from '../Actions/Country';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return action.payload.filter((country) => country.code !== 'IL');
    default:
      return state;
  }
};

export default countryReducer;
