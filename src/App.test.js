/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import App from './App';
import Header from './components/Header/Header';

test(
  'User should input a city and get autocomplete city name',
  () => {
    render(<Header />);
    const input = screen.getByRole('textbox');

    const event = new Event('change');
    input.value = 'bar';
    input.dispatchEvent(event);

    expect(input).toHaveValue('bar');
  }
);

test('the data is peanut butter', async () => {
  const data = await fetchData();
  expect(data).toBe('peanut butter');
});

test('the fetch fails with an error', async () => {
  expect.assertions(1);
  try {
    await fetchData();
  } catch (e) {
    expect(e).toMatch('error');
  }
});
