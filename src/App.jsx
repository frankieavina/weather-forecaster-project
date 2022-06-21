/* eslint-disable spaced-comment */
/* eslint-disable eqeqeq */
/* eslint-disable max-len */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';
import Home from './components/Home/Home';
import './App.css';
import WeatherContext from './context/WeatherContext';
// eslint-disable-next-line import/named
import { getDayWeatherData, getWeekWeatherData, getDayAirQualityData } from './api/GetWeatherData';
import CityWeatherDetail from './components/CityDetail/CityWeatherDetail';
import { addCityWeekWeather, deleteCityWeekWeather, setCityWeekWeather } from './store/weatherSlice';

// import Day from './img/day.png';
// import Night from './img/night.png';

function App() {
// Now we can use the React-Redux hooks to let React components interact with the Redux
// store. We can read data from the store with useSelector, and dispatch actions using useDispatch.
// The corresponding Redux action will be dispatched to the store
// The counter slice reducer will see the actions and update its state
// The <Counter> component will see the new state value from the store and re-render itself with the new data
  const dispatch = useDispatch();
  const weekData = useSelector((state) => state.weekData?.value);
  const [dayWeather, setDayWeather] = useState();
  const [airDayQuality, setAirDayQuality] = useState();
  const [init, setInit] = useState(true);

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
            if (init) {
              dispatch(setCityWeekWeather(data));
              setInit(false);
            } else {
              dispatch(addCityWeekWeather(data));
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
    console.log('UseEffect:', weekData);
  }, []);

  return (
    <>
      <div className="App"
        // style={{backgroundImage: `url(${dayNight})`, height:'100%', width:'100%'}}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      >
        <WeatherContext.Provider
          value={{
            weekWeather: weekData,
            dayWeather,
            airDayQuality,
            setNewCity: (lat, lng) => apiCalls(lat, lng),
            setDelete: (city) => {
              dispatch(deleteCityWeekWeather(city));
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
