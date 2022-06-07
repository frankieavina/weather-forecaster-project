import React , {useState} from 'react'
import '../../App.css'; 
import { useNavigate } from 'react-router-dom';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import { Row, Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card'; 
import DateRangeIcon from '@material-ui/icons/DateRange';
import styled from 'styled-components'; 

const WeekForecastCard = styled.section`

`

function TenDayForecast({weekResults}) {


  const weekday = (num) => {
    const day = ["Sun","Mon","Tue","Wed","Thur","Fri","Sat"];
    return day[num]; 
  }

  return (
    <WeekForecastCard>
      {(weekResults) 
        ?(
        <Card style={{margin:'1rem 0'}}>
        <Card.Body className='cardBody'>
            <Card.Title>
              <DateRangeIcon/>
              7-Day Forecast
            </Card.Title>
            <Card.Text className='cards'>

            {weekResults[0].data.map((dayData) =>(
              
              <Card style={{width:'5.25rem', margin:'0 0.1rem'}}>
                <Card.Body>
                  <Card.Text>
                    <Container style={{padding:'0px', textAlign:'center'}}>
                        <Row style={{textAlign:'center', width:'100%'}}>
                          {weekday(new Date(dayData.datetime).getDay())}
                        </Row>
                        <Row>
                          <img src={require(`../../icons/${dayData.weather.icon}.png`)} width='1rem' />
                        </Row>
                        <Row className='tempF'>
                          {dayData.temp}&#8457; 
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
        : <h3> Loading .. </h3>
      }

    </WeekForecastCard>
  )
}

export default TenDayForecast