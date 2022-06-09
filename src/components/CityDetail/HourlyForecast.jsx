/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import '../../App.css';
import { useNavigate } from 'react-router-dom';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function HourlyForecast({ dayResults }) {
  return (
    <>
      {(dayResults)
        ? (
          <Card style={{ margin: '1rem 0' }}>
            <Card.Body className="cardBody">
              <Card.Title>
                <QueryBuilderIcon />
                Hourly Forecast
              </Card.Title>
              <Card.Text className="cards">

                {dayResults.data.map((hourData) => (
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
            </Card.Body>
          </Card>
        )
        : <h3> Loading .. </h3> }

    </>
  );
}

export default HourlyForecast;
