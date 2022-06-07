/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Home from './components/Home/Home';
import './App.css';
import WeatherContext from './context/WeatherContext';
// import {getWeatherData} from './api/GetWeatherData';
import CityWeatherDetail from './components/CityDetail/CityWeatherDetail';

import dayWeatherDB from './data/weatherBit-Day-Forecast.json';
import weekWeatherDB from './data/weatherBit-Week-Forecast.json';
import dayAirQualityDB from './data/weatherBit-Day-Air-Quality.json';

// import Day from './img/day.png';
// import Night from './img/night.png';

function App() {
  // const [userCoords, setUserCoords] = useState(null);
  const [weekWeather, setWeekWeather] = useState(null); // remember to put array when pulling
  const [dayWeather, setDayWeather] = useState(null); // remember to put array when pulling from api
  const [airDayQuality, setAirDayQuality] = useState(null);// remember to put array when pulling
  // const [dayNight, setDayNight] = useState('');
  const successHandler = (position) => {
    // eslint-disable-next-line no-unused-vars
    const { latitude, longitude } = position.coords;
    // setUserCoords({lat:latitude, lng:longitude});
  };
  const errorHandler = (error) => console.error(error.message);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported.');
    } else {
      // const today = new Date().getHours();
      // if(today >= 9 && today <= 19){
      //   setDayNight(Day);
      // }
      // else{
      //   setDayNight(Night);
      // }
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }
  }, []);

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
    setAirDayQuality(dayAirQualityDB);
  }, [dayWeather, weekWeather, dayAirQualityDB]);

  return (
    <>
      <div className="App"
        // style={{backgroundImage: `url(${dayNight})`, height:'100%', width:'100%'}}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      >
        <WeatherContext.Provider
          value={{
            weekWeather,
            dayWeather,
            airDayQuality,
          }}
        >
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="city-weather-details/:id" element={<CityWeatherDetail />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </WeatherContext.Provider>
      </div>
    </>
  );
}

export default App;
