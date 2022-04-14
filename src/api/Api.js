export const fetchCountryData = async () => {
  const res = await fetch('https://restcountries.com/v3.1/all');
  return res.json();
};

const url = 'https://api.openweathermap.org/data/2.5/air_pollution?';
const id = '9143e5c1d67ba3d103ffdcc19c9af51e';

export const fetchPollutionData = async () => {
  const res = await fetch(`${url}lat=39&lon=76&appid=${id}`);
  return res.json();
};
