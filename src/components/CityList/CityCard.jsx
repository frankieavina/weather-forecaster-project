import React from 'react'
import styled from 'styled-components'; 
import Accordion from 'react-bootstrap/Accordion'; 
import Card from 'react-bootstrap/Card'
import CityCardDetail from './CityCardDetail';
import Container from 'react-bootstrap/Container'; 
import Row from 'react-bootstrap/Row'; 
import Col from 'react-bootstrap/Col';
import '../../App.css'; 

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
  return (

    <CardWrapper>
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="1">
            <Accordion.Header>
                <Card className='card'>
                <Card.Body className='cardBody'>
                    {/* <Card.Title>{location}</Card.Title> */}
                    <Card.Text>
                        <Container className='cardContainer'>
                            <Row className='rowCon'>
                                <Col className='location'>{location}</Col>
                                <Col></Col>
                                <Col className='currentTemp'>99 &#8457;</Col>
                            </Row>
                            <Row className='rowCon'>
                                <Col className='descrip'>Cloudy</Col>
                                <Col></Col>
                                <Col className='highLow'>L:50 H:89</Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
                </Card>
            </Accordion.Header>
            <Accordion.Body>
                <CityCardDetail/> 
            </Accordion.Body>
        </Accordion.Item>
     </Accordion>

    </CardWrapper>
  )
}

export default CityCard