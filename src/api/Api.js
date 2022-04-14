export const fetchCountryData = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  // console.log('cntry: ', res.json());
  return res.json();
};

const url = 'https://api.openweathermap.org/data/2.5/air_pollution?';
const id = '9143e5c1d67ba3d103ffdcc19c9af51e';

export const fetchPollutionData = async (lat, lon) => {
  const res = await fetch(`${url}lat=${lat}&lon=${lon}&appid=${id}`);
  return res.json();
};
