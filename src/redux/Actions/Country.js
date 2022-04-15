import { fetchCountryData } from '../../api/Api';

export const ADD_COUNTRY = 'Country/ADD_COUNTRY';

export const addCountries = (payload) => ({
  type: ADD_COUNTRY,
  payload,
});

export const getCountries = (reg) => async (dispatch) => {
  const countries = await fetchCountryData(reg);
  dispatch({
    type: ADD_COUNTRY,
    payload: countries.map((country) => ({
      name: country.name,
      region: reg,
      latlng: country.latlng,
      population: country.population,
      code: country.cca2,
    })),
  });
};
