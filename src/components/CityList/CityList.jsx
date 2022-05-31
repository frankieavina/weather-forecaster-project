import React, { useContext } from 'react';
import WeatherContext from '../../context/WeatherContext'
import CityCard from './CityCard';

function CityList() {

  const {cities} = useContext(WeatherContext); 

  return (
    <div>
      {cities.map((city)=>(
        <CityCard location={city}/>
      ))
      }
    </div>
  )
}

export default CityList