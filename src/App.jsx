/* eslint-disable import/no-unresolved */
/* eslint-disable object-shorthand */
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
import SignIn from './components/SignIn/SignIn';
import SignUp from './components/SignUp/SignUp';
import './App.css';
import WeatherContext from './context/WeatherContext';
// eslint-disable-next-line import/named
import { getDayWeatherData, getDayAirQualityData } from './api/GetWeatherData';
import CityWeatherDetail from './components/CityDetail/CityWeatherDetail';
import { addCityWeekWeather, deleteCityWeekWeather, setCityWeekWeather, getWeekResults } from './store/weatherSlice';

// import Day from './img/day.png';
// import Night from './img/night.png';

function App() {
  const dispatch = useDispatch();
  // useSelector will compare the content of object, if they are same it won't rerender (shallowEqual)
  // As you are returning primitive value from selector so it won't make a difference if you use shallowCopy
  // or not.
  // you can use shallowEquals when you select an object that might be similar in contents but different by reference.
  const weekData = useSelector((state) => state.weekData?.value, shallowEqual);
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
        dispatch(getWeekResults({ lat: lat, lng: lng }));
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
              <Route path="sign-in" element={<SignIn />} />
              <Route path="sign-up" element={<SignUp />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </WeatherContext.Provider>
      </div>
    </>
  );
}

export default App;
