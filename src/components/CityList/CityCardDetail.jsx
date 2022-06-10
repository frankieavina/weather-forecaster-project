/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import WeatherContext from '../../context/WeatherContext';
import '../../App.css';

function CityCardDetail({ city }) {
  const { dayWeather } = useContext(WeatherContext);
  const navigate = useNavigate();

  const result = [...dayWeather].filter((obj) => {
    return (
      obj.city_name.match(city)
    );
  });

  const onHandleClick = () => {
    navigate(`city-weather-details/${city}`);
  };

  return (
    <>
      {(dayWeather)
        ? (
          <Card>
            <Card.Body className="cardBody">
              <Card.Title>
                <QueryBuilderIcon />
                Hourly Forecast
              </Card.Title>
              <Card.Text className="cards">

                {result[0].data.map((hourData) => (
                  <Card style={{ width: '4.5rem', margin: '0 0.1rem' }}>
                    <Card.Body>
                      <Card.Text>
                        <Container style={{ padding: '0px', textAlign: 'center' }}>
                          <Row style={{ textAlign: 'center', width: '100%' }}>
                            {(hourData.timestamp_local).match(/\d\d:\d\d/)}
                          </Row>
                          <Row>
                            <img src={require(`../../icons/${hourData.weather.icon}.png`)} width="1rem" alt="" />
                          </Row>
                          <Row className="tempF">
                            {hourData.temp}&#8457;
                          </Row>
                        </Container>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))}

              </Card.Text>
              <Button variant="primary" onClick={onHandleClick}>View Details</Button>
            </Card.Body>
          </Card>
        )
        : <h3> Loading .. </h3> }

    </>
  );
}

export default CityCardDetail;
