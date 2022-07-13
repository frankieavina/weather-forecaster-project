/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SignIn() {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(userLogIn({email: email, password: password}));
  }

  const handleInputChange = () =>{
    const { email, password} = e.target;
    setEmail(email);
    setPassword(password);

  }
  return (
    <div>
      <form onSubmit={submitForm}> 
        <label className="label" htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          onChange={handleInputChange}
          className="input"
          value={email}
          type="email"/>
        <label className="label" htmlFor="password">Password</label>
        <input 
          id="password"
          name="password"
          onChange={handleInputChange} 
          className="input"
          value={password} 
          type="password" />
        <button onClick={handleSubmit} className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
