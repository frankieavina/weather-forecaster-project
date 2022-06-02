import React, { useContext, useEffect, useState } from 'react'
import styled from 'styled-components'; 
import Accordion from 'react-bootstrap/Accordion'; 
import Card from 'react-bootstrap/Card'
import CityCardDetail from './CityCardDetail';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import '../../App.css'; 
import WeatherContext from '../../context/WeatherContext';
import CityList from './CityList';

const CardWrapper = styled.header`
    width: 50%; 
    margin: 0 auto; 
    margin-top: 2rem; 
    .accordion-button{
        border: none; 
    }
    .card{
        width: 100%; 
    }
    .cardHeader{
        width: 100%; 
        display: flex; 
        justify-content: space-between; 
    }
    .currentTemp{
        font-weight: bold; 
        font-size: 2rem; 
    }
    .descrip{
        font-size: 0.8rem; 
    }
    .highLow{
        font-size: 0.8rem 
    }
    .location{
        font-size: 1.5rem; 
        font-weight: bold; 
    }
    .rowCon{
        padding: 1rem; 
    }
`; 

function CityCard({location}) {

    const {weekWeather} = useContext(WeatherContext);
    const [ isLoading, setIsLoading ] = useState(true); 

    useEffect(()=>{

        setIsLoading(weekWeather? false : true);

    },[weekWeather])



    return (
    <>
    {(!isLoading)
        ?(
        <CardWrapper>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="1">
                    <Accordion.Header>
                        <Card className='card'>
                        <Card.Body className='cardBody'>
                            <Card.Text>
                                <Container className='cardContainer'>
                                    <Row className='rowCon'>
                                        <Col className='location'>{weekWeather.city_name}</Col>
                                        <Col></Col>
                                        <Col className='currentTemp'>{weekWeather.data[0].temp} &#8457;</Col>
                                    </Row>
                                    <Row className='rowCon'>
                                        <Col className='descrip'>{weekWeather.data[0].weather.description}</Col>
                                        <Col></Col>
                                        <Col className='highLow'>L:{weekWeather.data[0].low_temp} H:{weekWeather.data[0].max_temp}</Col>
                                    </Row>
                                </Container>
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Accordion.Header>
                    <Accordion.Body >
                        <CityCardDetail/> 
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </CardWrapper>        
        )
        : <h3>Loading ...</h3>
    }
    </>

  )
}

export default CityCard