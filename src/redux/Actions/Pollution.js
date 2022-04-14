import { fetchPollutionData } from '../../api/Api';

export const ADD_POLLUTION = 'Pollution/ADD_POLLUTION';

export const addPollution = (payload) => ({
  type: ADD_POLLUTION,
  payload,
});

export const getPollutionData = () => async (dispatch) => {
  const pollutions = await fetchPollutionData();
  dispatch({
    type: ADD_POLLUTION,
    payload: {
      lat: pollutions.coord.lat,
      lng: pollutions.coord.lon,
      co: pollutions.list[0].components.co,
      no: pollutions.list[0].components.no,
      no2: pollutions.list[0].components.no2,
      id: pollutions.list[0].main.aqi,
    },
  });
};
