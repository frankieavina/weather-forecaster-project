/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../store/userSlice';
import '../../App.css';

function SignIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    console.log('First Step:', email + password);
    dispatch(userLogIn({ email, password }));
    navigate('');
  };

  const handleEmailChange = (e) => {
    const emailE = e.target.value;
    setEmail(emailE);
  };

  const handlePasswordChange = (e) => {
    const passwordE = e.target.value;
    setPassword(passwordE);
  };

  return (
    <div className="cardContainer2">
      <Card className="formContainer">
        <Card.Header className="cardHeader text-center">SIGN IN</Card.Header>
        <Card.Body className="cardBody">
          <Form onSubmit={submitForm}>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="email">Email Address</Form.Label>
              <Form.Control
                id="myEmail"
                name="myEmail"
                className="input"
                value={email}
                type="email"
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label className="label" htmlFor="password">Password</Form.Label>
              <Form.Control
                id="myPassword"
                name="myPassword"
                className="input"
                value={password}
                type="password"
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Button className="signButton" type="submit">
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SignIn;
