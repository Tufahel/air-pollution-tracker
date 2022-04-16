import { ADD_COUNTRY } from '../Actions/Country';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_COUNTRY:
      return action.payload;
    default:
      return state;
  }
};

export default countryReducer;
