/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Home from './components/Home/Home';
import './App.css';
import WeatherContext from './context/WeatherContext';
// eslint-disable-next-line import/named
import { getDayWeatherData, getWeekWeatherData, getDayAirQualityData } from './api/GetWeatherData';
import CityWeatherDetail from './components/CityDetail/CityWeatherDetail';

import dayWeatherDB from './data/weatherBit-Day-Forecast.json';
import weekWeatherDB from './data/weatherBit-Week-Forecast.json';
import dayAirQualityDB from './data/weatherBit-Day-Air-Quality.json';

// import Day from './img/day.png';
// import Night from './img/night.png';

function App() {
  const [weekWeather, setWeekWeather] = useState(); // remember to put array when pulling
  const [dayWeather, setDayWeather] = useState(); // remember to put array when pulling from api
  const [airDayQuality, setAirDayQuality] = useState();// remember to put array when pulling

  const apiCalls = async (lat, lng) => {
    await getDayWeatherData(lat, lng)
      .then((data) => {
        if (dayWeather) {
          setDayWeather((previousState) => [...previousState, { ...data }]);
        } else {
          setDayWeather([data]);
        }
      })
      .then(() => {
        getWeekWeatherData(lat, lng)
          .then((data) => {
            if (weekWeather) {
              setWeekWeather((previousState) => [...previousState, { ...data }]);
            } else {
              setWeekWeather([data]);
            }
          });
      })
      .then(() => {
        getDayAirQualityData(lat, lng)
          .then((data) => {
            if (airDayQuality) {
              setAirDayQuality((previousState) => [...previousState, { ...data }]);
            } else {
              setAirDayQuality([data]);
            }
          });
      });
  };

  const successHandler = (position) => {
    // eslint-disable-next-line no-unused-vars
    const { latitude, longitude } = position.coords;
    apiCalls(latitude, longitude);
  };
  const errorHandler = (error) => console.error(error.message);

  useEffect(() => {
    if (!navigator.geolocation) {
      console.error('Geolocation is not supported.');
    } else {
      navigator.geolocation.getCurrentPosition(successHandler, errorHandler);
    }
  }, []);

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
            setNewCity: (lat, lng) => apiCalls(lat, lng),
            setDelete: (city) => {
              setWeekWeather([...weekWeather].filter((cityObj) => cityObj.city_name != city));
            },
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
