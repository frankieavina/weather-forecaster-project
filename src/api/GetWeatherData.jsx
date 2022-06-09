import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_BIT_API_KEY;

const getDayWeatherData = async (lat, lng) => {
  try {
    const results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lng}&key=${API_KEY}`);
    console.log('Day:', results);
    return results;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const getWeekWeatherData = async (lat, lng) => {
  try {
    const results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&key=${API_KEY}`);
    console.log('Week:', results);
    console.log(results);
    return results;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

const getDayAirQualityData = async (lat, lng) => {
  try {
    const results = await axios.get(`https://api.weatherbit.io/v2.0/forecast/airquality?lat=${lat}&lon=${lng}&key=${API_KEY}`);
    console.log('Quality:', results);
    return results;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export { getDayWeatherData, getWeekWeatherData, getDayAirQualityData };

// Daily Forecast Info (7 day):
// Request URL -> https://api.weatherbit.io/v2.0/forecast/daily?lat=37.6166061&lon=-120.9679158&days=7&units=I&key=b3fe975e055648289d71fd9b09c4927e

// Hourly Forecast Info (8 hours):
// Request URL -> https://api.weatherbit.io/v2.0/forecast/hourly?lat=37.6166061&lon=%20-120.9679158&units=I&key=b3fe975e055648289d71fd9b09c4927e&hours=8

// Air Quality Forecast (8 hours):
// Request URL -> https://api.weatherbit.io/v2.0/forecast/airquality?lat=37.6166061&lon=-120.9679158&key=b3fe975e055648289d71fd9b09c4927e&hours=8
