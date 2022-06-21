import React from 'react';
import ReactDOM from 'react-dom/client';
// providing store to the whole app using redux
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
import './index.css';

import App from './App';

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorBoundary from './ErrorBoundary';

// Once the store is created, we can make it available to our React components
// by putting a React-Redux <Provider> around our application in src/index.js.
// Import the Redux store we just created, put a <Provider> around your <App>,
// and pass the store as a prop:
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ErrorBoundary>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ErrorBoundary>
    </Provider>
  </React.StrictMode>
);
