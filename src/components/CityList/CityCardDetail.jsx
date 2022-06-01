import React, { useContext } from 'react';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'; 
import Button from 'react-bootstrap/Button'; 
import WeatherContext from '../../context/WeatherContext';
import '../../App.css'; 

function CityCardDetail() {

  const {dayWeather} = useContext(WeatherContext);

  return (
    <>
      {(dayWeather) 
        ?(
        <Card>
        <Card.Body>
            <Card.Title>
              <QueryBuilderIcon/>
              Hourly Forecast
            </Card.Title>
            <Card.Text className='cards'>

            {dayWeather.data.map((hourData) =>(
              
              <Card style={{width:'4.5rem', margin:'0 0.1rem'}}>
                <Card.Body className='cardBody' >
                  <Card.Text>
                    <Container>
                        <Row>
                          {(new Date(hourData.timestamp_utc).getUTCHours())}
                        </Row>
                        <Row>
                          {hourData.weather.icon} 
                        </Row>
                        <Row className='tempF'>
                          {hourData.temp}&#8457; 
                        </Row>
                    </Container>
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}

            </Card.Text>
            <Button variant="primary">View Details</Button>
        </Card.Body>
        </Card>        
        )
        : <h3> Loading .. </h3>
      }

    </>
  )
}

export default CityCardDetail