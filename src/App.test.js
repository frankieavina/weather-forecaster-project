/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { fireEvent, render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import getCoordinates from './api/getLocation';
import { getDayWeatherData } from './api/GetWeatherData';
import Header from './components/Header/Header';
import dayWeatherDB from './data/weatherBit-Day-Forecast.json';

const API_KEY = process.env.REACT_APP_WEATHER_BIT_API_KEY;
const axios = require('axios');
// ***************************** component testing *****************************************
// type some place in the search bar and autocomplete it with auto-complete. selected first
// result and expected results should match
// Fre -> Fresno,CA,USA is the expected value
describe('User should input a city and get autocomplete city', () => {
  test(
    'Change Search Bar Location Name',
    async () => {
      render(<Header />);
      const searchInput = screen.getByPlaceholderText('Search for City');

      const event = new Event('change');
      searchInput.value = 'Fresno';
      searchInput.dispatchEvent(event);
      await expect(searchInput.value).toContain('Fresno');
    }
  );
});

// ************************** UNIT TESTING GEOCODE API CALL FUNCTION *************************/
// describe block are useful for grouping set of tests for the output of running tests

// describe('Test API functions', () => {
//   test('should return the first entry from the api', async () => {
//     const data = await getCoordinates('Fresno,CA,USA');
//     expect(data.data[0].lat).toBe('36.7394421');
//   });
// });

// To mock an API call in a function, you just need to do these 3 steps:

// 1. Import the module you want to mock into your test file.
// 2. jest.mock() the module.When you import a module into a test file
// 3. Use .mockResolvedValue(<mocked response>) to mock the response.
// NOTE: Now, in order to test this method without actually hitting the API
// (and thus creating slow and fragile tests).
// we can use the jest.mock(...) function to automatically mock the axios module.
// jest.mock('axios');

describe('fetch day weather', () => {
  describe('when API call is successful', () => {
    it('should return weather info', async () => {
      // given
      axios.get.mockResolvedValueOnce(dayWeatherDB);

      // when
      const result = await getDayWeatherData(37.6166061, -120.9679158);
      console.log(result);

      // then
      expect(axios.get).toHaveBeenCalledWith(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=37.6166061&lon=-120.9679158&units=I&key=${API_KEY}&hours=8`);
      // expect(result[0]).toEqual(dayWeatherDB);
    });
  });

  describe('when API call fails', () => {
    it('should return empty weather list/data', async () => {
      // given
      const message = 'Network Error';
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await getDayWeatherData(37.6166061, -120.9679158);

      // then
      expect(axios.get).toHaveBeenCalledWith(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=37.6166061&lon=-120.9679158&units=I&key=${API_KEY}&hours=8`);
      expect(result).toEqual(undefined);
    });
  });
});
