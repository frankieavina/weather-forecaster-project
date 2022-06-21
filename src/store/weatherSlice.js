/* eslint-disable max-len */
/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const weekWeather = [];

// Creating a slice requires a string name to identify the slice, an initial state value,
// and one or more reducer functions to define how the state can be updated. Once a slice
//  is created, we can export the generated Redux action creators and the reducer function
// for the whole slice.
export const weatherSlice = createSlice({
  name: 'weekData',
  initialState: {
    value: weekWeather,
  },
  // # @reduxjs/toolkit's `createSlice()` method uses immer behind the scenes to avoid
  // state mutation errors; thanks to immer, we are able to "mutate" our state values directly
  // within our reducer actions in ways we couldn't in traditional React/Redux, because immer
  // applies these mutations behind the scenes upon a draft copy of our state!
  // Using Immer is like having a personal assistant. The assistant takes a letter
  // (the current state) and gives you a copy (draft) to jot changes onto. Once you
  // are done, the assistant will take your draft and produce the real immutable,
  // final letter for you (the next state).
  reducers: {
    setCityWeekWeather(state, { payload }) {
      state.value = [payload];
    },
    addCityWeekWeather(state, { payload }) {
      state.value = [...state.value, payload];
    },
    deleteCityWeekWeather(state, { payload }) {
    // [...weekWeather].filter((cityObj) => cityObj.city_name != city)
      state.value = [...state].filter((cityObj) => cityObj.city_name !== payload);
    },
  },
});

export const { addCityWeekWeather, deleteCityWeekWeather, setCityWeekWeather } = weatherSlice.actions;

export default weatherSlice.reducer;
