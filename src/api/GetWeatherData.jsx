import axios from 'axios';

const API_KEY = process.env.REACT_APP_WEATHER_BIT_API_KEY;

const getWeatherData = async (lat, lng) => {
    try{
        const results = await axios.get(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lng}&key=${API_KEY}`);
        return results; 

    } catch(error) {
        console.error(`Error: ${error}`)
    }
}

export {getWeatherData}