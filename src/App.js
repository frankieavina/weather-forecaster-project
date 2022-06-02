import { useContext, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound.jsx';
import Home from './components/Home/Home';
import './App.css';
import WeatherContext from './context/WeatherContext'; 
import {getWeatherData} from './api/GetWeatherData';
import CityWeatherDetail from './components/CityDetail/CityWeatherDetail'; 

import dayWeatherDB from './data/weatherBit-Day-Forecast.json';
import weekWeatherDB from './data/weatherBit-Week-Forecast.json';
import dayAirQualityDB from './data/weatherBit-Day-Air-Quality.json';


function App() {

  const [userCoords, setUserCoords] = useState(null);
  const [cities, setCities] = useState(['Fresno,CA', 'Modesto,CA']); 
  const [weekWeather, setWeekWeather] = useState(null); 
  const [dayWeather, setDayWeather] = useState(null); 
  const [airDayQuality, setAirDayQuality] = useState([]); 

  useEffect(()=>{
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported.');
      return;
    }
    else{  
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler); 
    }
  },[]);

  const successHandler = position => {
    const { latitude, longitude } = position.coords;
    setUserCoords({lat:latitude, lng:longitude});
  };
  
  const errorHandler = error => console.error(error.message);

  useEffect(() => {
    // NEED TO DO FOR LOOP TO GET DATA IF THERES MORE CITIES 
    // if(userCoords){
    //   getWeatherData(userCoords.lat, userCoords.lng)
    //   .then((data) => {
    //     console.log(data); 
    //   });
    // }

    setDayWeather(dayWeatherDB);
    setWeekWeather(weekWeatherDB);

  },[dayWeather, weekWeather])

  return (
    <div className="App">
      <WeatherContext.Provider 
      value={{
        cities,
        weekWeather,
        dayWeather,
      }}
      >
        <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>} />
            <Route path="city-weather-details/:id" element={<CityWeatherDetail/>} />
            <Route path="*" element={<NotFound />} />
          </Route>          
        </Routes>        
      </WeatherContext.Provider>
    </div>
  );
}

export default App;
