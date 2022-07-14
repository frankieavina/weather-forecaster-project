/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { userLogIn } from '../../store/userSlice';

function SignIn() {
  const [password, setPassword] = useState(null);
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const submitForm = (event) => {
    event.preventDefault();
    dispatch(userLogIn({ email, password }));
  };

  const handleInputChange = (e) => {
    const { email, password } = e.target;
    setEmail(email);
    setPassword(password);
  };

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
          type="email"
        />
        <label className="label" htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          onChange={handleInputChange}
          className="input"
          value={password}
          type="password"
        />
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignIn;
