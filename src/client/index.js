import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';

import createStore from '../services/store';

import App from '../components/app';

const store = createStore();

const AppWithRedux = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

hydrate(<AppWithRedux />, document.getElementById('root'));
