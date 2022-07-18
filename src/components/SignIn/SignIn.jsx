/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../store/userSlice';

function SignIn() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    console.log('First Step:', email + password);
    dispatch(userLogIn({ email, password }));
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
    <div>
      <form onSubmit={submitForm}>
        <label className="label" htmlFor="email">Email</label>
        <input
          id="myEmail"
          name="myEmail"
          className="input"
          value={email}
          type="email"
          onChange={handleEmailChange}
        />
        <label className="label" htmlFor="password">Password</label>
        <input
          id="myPassword"
          name="myPassword"
          className="input"
          value={password}
          type="password"
          onChange={handlePasswordChange}
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
