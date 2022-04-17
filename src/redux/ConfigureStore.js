import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import countryReducer from './Reducers/Country';
import pollutionReducer from './Reducers/Pollution';

const rootReducer = combineReducers({
  countryReducer,
  pollutionReducer,
});

const store = createStore(rootReducer,
  compose(applyMiddleware(thunk, logger)));
export default store;
