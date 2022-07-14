/* eslint-disable max-len */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import './Loading.scss';
import Card from 'react-bootstrap/Card';

function Loading() {
  return (
    <div className="preloader" style={{ opacity: '1' }}>
      {/* <svg className="spinner" width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </svg> */}
      <Card border="info" style={{ width: '45rem' }} className="text-center">
        <Card.Header></Card.Header>
        <Card.Body>
          <Card.Title>Loading</Card.Title>
          <Card.Text>
            Looking Outside for you ... one sec.
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Loading;
