/* eslint-disable no-param-reassign */
/* eslint-disable object-shorthand */
/* eslint-disable import/no-unresolved */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const userLogIn = createAsyncThunk(
  'search/getResults',
  async ({ email, password }) => {
    try {
      console.log('2nd Step:' + email + password);
      const backendRes = await axios.post(
        'http://localhost:8000/api/signin',
        {
          email: email,
          password: password
        }
      )
        .then((res) => {
          console.log(res);
        });
    } catch (err) {
      console.error(`Error!: ${err}`);
    }
  }
);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
    name: '',
    email: '',
    password: '',
    loggedIn: false,
    loading: false,
    error: false
  },
  reducers: {
    setUser(state, { payload }) {
      state.username = payload.username;
      state.name = payload.name;
      state.loggedIn = false;
    },
    setSameUser(state) {
      return { ...state };
    },
    toggleLoggedIn(state) {
      state.loggedIn = !state.loggedIn;
    },
  },
});

export const { setUser, setSameUser, toggleLoggedIn } = userSlice.actions;

export default userSlice.reducer;
