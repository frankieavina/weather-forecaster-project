import React, {useEffect, useState} from 'react'
import BlurOnIcon from '@material-ui/icons/BlurOn';
import Card from 'react-bootstrap/Card';
import '../../App.css';

const getQuality = (aqi) =>{
  if(aqi >= 0 && aqi <= 50){ return 'Good' }
  else if(aqi >= 51 && aqi <= 100){ return 'Moderate' }
  else if(aqi >= 101 && aqi <= 150){return 'Unhealthy for Sensitive Groups'  }
  else if(aqi >= 151 && aqi <= 200){ return 'Unhealthy' }
  else if(aqi >= 201 && aqi <= 300){ return 'Very Unhealthy' }
  else{ return('Hazardous') }
}

function HourlyAirQuality({aqi}) {

  const [airQuality, setAirQuality] = useState(null); 

  useEffect(() => {

    setAirQuality(getQuality(parseInt(aqi))); 

  },[])
  
  
  return (
    <div style={{width:'50%'}}>
      {(airQuality) 
        ?(
        <Card style={{margin:'1rem 0'}}>
        <Card.Body className='cardBody'>
            <Card.Title>
            <BlurOnIcon/>Air Quality
            </Card.Title>
            <Card.Text className='cards'>

              <Card className="text-center" style={{width:'100%'}}>
                <Card.Body>
                  <Card.Title>{aqi} - {airQuality}</Card.Title>
                  <Card.Text>
                    <input className='rangeSlider' type='range' min='1' max='400' value={aqi} style={{width:'100%'}}/>
                  </Card.Text>
                </Card.Body>
              </Card>

            </Card.Text>
        </Card.Body>
        </Card>        
        )
        : <h3> Loading .. </h3>
      }
    </div>
  )
}

export default HourlyAirQuality