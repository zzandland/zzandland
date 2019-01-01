import React from 'react';
import { hydrate } from 'react-dom';

import { Provider } from 'react-redux';
import store from './store/store';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App';

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.querySelector('#container'),
);

