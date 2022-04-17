import { ADD_POLLUTION } from '../Actions/Pollution';

const pollutionReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POLLUTION:
      return action.payload;
    default:
      return state;
  }
};

export default pollutionReducer;
