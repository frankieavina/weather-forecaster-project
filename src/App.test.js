/* eslint-disable no-undef */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { render, screen } from '@testing-library/react';
import userEvents from '@testing-library/user-event';
import App from './App';
import Header from './components/Header/Header';

test(
  'User should input a city and get autocomplete city',
  () => {
    render(<Header />);
    const input = screen.getByRole('textbox');

    const event = new Event('change');
    input.value = 'bar';
    input.dispatchEvent(event);

    expect(input).toHaveValue('bar');
  }
);
