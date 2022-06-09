import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router';
import styled from 'styled-components';
import Button from 'react-bootstrap/Button';
import WeatherContext from '../../context/WeatherContext';
import HourlyAirQuality from './HourlyAirQuality';
import HourlyForecast from './HourlyForecast';
import TenDayForecast from './TenDayForecast';
import ForecastDetailsToday from './ForecastDetailsToday';

const DetailsCard = styled.div`
display: flex; 
flex-direction: column; 
margin: auto 0; 
align-items: center; 
padding: 1rem; 

h1,h3,h4,h6{
  color: white;
  font-weight: bold; 
}

`;

function CityWeatherDetail() {
  const { id: selectedCity } = useParams();
  const { weekWeather, dayWeather, airDayQuality } = useContext(WeatherContext);
  const navigate = useNavigate();
  const onHandleClick = () => {
    navigate('/');
  };
  // getting city day weather, week weather, and day air quality info
  const dayResults = [...dayWeather].filter((obj) => {
    return (
      obj.city_name.match(selectedCity)
    );
  });
  const weekResults = [...weekWeather].filter((obj) => {
    return (
      obj.city_name.match(selectedCity)
    );
  });
  const airQualityResults = [...airDayQuality].filter((obj) => {
    return (
      obj.city_name.match(selectedCity)
    );
  });

  return (
    <DetailsCard>
      <h1>{dayResults[0].city_name}</h1>
      <h3>{weekResults[0].data[0].temp}&#8457;</h3>
      <h4>{weekWeather[0].data[0].weather.description}</h4>
      <h6>H:{weekWeather[0].data[0].max_temp}&#8457; L:{weekWeather[0].data[0].low_temp}&#8457;</h6>

      <HourlyForecast dayResults={dayResults} />
      <TenDayForecast weekResults={weekResults} />
      <HourlyAirQuality aqi={airQualityResults[0].data[0].aqi} />
      <ForecastDetailsToday dayResults={weekWeather[0].data[0]} />

      <div>
        <Button variant="primary" onClick={onHandleClick}>Back Home</Button>
      </div>

    </DetailsCard>
  );
}

export default CityWeatherDetail;
