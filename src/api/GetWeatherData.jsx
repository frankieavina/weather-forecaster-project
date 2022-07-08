import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_BIT_API_KEY;

const getDayWeatherData = async (lat, lng) => {
  try {
    console.log('hiiiiii:' + lat + lng);
    const results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lng}&units=I&key=${API_KEY}&hours=8`);
    console.log(results);
    return results.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

// const getWeekWeatherData = async (lat, lng) => {
//   try {
//     const results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=7&units=I&key=${API_KEY}`);
//     return results.data;
//   } catch (error) {
//     console.error(`Error: ${error}`);
//   }
// };

const getDayAirQualityData = async (lat, lng) => {
  try {
    const results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/airquality?lat=${lat}&lon=${lng}&key=${API_KEY}&hours=8`);
    return results.data;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export { getDayWeatherData, getDayAirQualityData };
