import React from 'react';
import OpacityIcon from '@material-ui/icons/Opacity';
import SpeedIcon from '@material-ui/icons/Speed';
import ToysIcon from '@material-ui/icons/Toys';
import FilterHdrIcon from '@material-ui/icons/FilterHdr';
import Card from 'react-bootstrap/Card';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import '../../App.css';
import { Col, Container, Row } from 'react-bootstrap';

function ForecastDetailsToday({ dayResults }) {
  return (
    <div style={{ width: '50%' }}>
      {(dayResults)
        ? (
          <Card style={{ margin: '1rem 0' }}>
            <Card.Body className="cardBody">
              <Card.Title>
                <QueryBuilderIcon />
                Details Forecast for {dayResults.valid_date}
              </Card.Title>
              <Card.Text className="cards">
                <Container>
                  <Row>
                    <Col>
                      <Card className="text-center infoCard">
                        <Card.Header>
                          <OpacityIcon />
                          Precipitation
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            {dayResults.precip}&quot;mm in the last 24 hours
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className="text-center infoCard">
                        <Card.Header>
                          <SpeedIcon />
                          Pressure
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            {dayResults.pres}&quot; inHG for today
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>

                  <Row>
                    <Col>
                      <Card className="text-center infoCard">
                        <Card.Header>
                          <ToysIcon />
                          Wind
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            {dayResults.wind_gust_spd}&quot; mph {dayResults.wind_cdir}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>

                    <Col>
                      <Card className="text-center infoCard">
                        <Card.Header>
                          <FilterHdrIcon />
                          Sunset and Sunrise
                        </Card.Header>
                        <Card.Body>
                          <Card.Text>
                            Sunset: {new Date(dayResults.sunset_ts).toLocaleTimeString('en-US')}
                            <hr />
                            Sunrise: {new Date(dayResults.sunrise_ts).toLocaleTimeString('en-US')}
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Card.Text>
            </Card.Body>
          </Card>
        )
        : <h3> Loading .. </h3> }
    </div>
  );
}

export default ForecastDetailsToday;
