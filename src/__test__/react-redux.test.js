import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import countryReducer from '../redux/Reducers/Country';
import pollutionReducer from '../redux/Reducers/Pollution';
import Regions from '../components/Regions';
import Countries from '../components/Countries';
import Pollutions from '../components/Pollutions';

const rootReducer = combineReducers({
  countryReducer,
  pollutionReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

afterEach(cleanup);

describe('Region List', () => {
  test('Region Lists renders correctly', () => {
    const regions = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Regions />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(regions).toMatchSnapshot();
  });
});

describe('Countries List ', () => {
  test('Countries List renders correctly', () => {
    const countries = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Countries />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(countries).toMatchSnapshot();
  });
});

describe('Pollutions List ', () => {
  test('Pollution lists render correctly', () => {
    const pollutions = renderer
      .create(
        <Provider store={store}>
          <Router>
            <Pollutions />
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(pollutions).toMatchSnapshot();
  });
});
