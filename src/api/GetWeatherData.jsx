import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_BIT_API_KEY;

const getWeatherData = async (lat, lng) => {
  try {
    const results = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${API_KEY}`);
    return results;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
};

export default { getWeatherData };

// Daily Forecast Info (7 day):
// Request URL -> https://api.weatherbit.io/v2.0/forecast/daily?lat=37.6166061&lon=-120.9679158&days=7&units=I&key=b3fe975e055648289d71fd9b09c4927e

// Hourly Forecast Info (8 hours):
// Request URL -> https://api.weatherbit.io/v2.0/forecast/hourly?lat=37.6166061&lon=%20-120.9679158&units=I&key=b3fe975e055648289d71fd9b09c4927e&hours=8

// Air Quality Forecast (8 hours):
// Request URL -> https://api.weatherbit.io/v2.0/forecast/airquality?lat=37.6166061&lon=-120.9679158&key=b3fe975e055648289d71fd9b09c4927e&hours=8
