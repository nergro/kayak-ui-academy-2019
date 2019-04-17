import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';

export default (initialState = {}) => {
  const devMiddleware = typeof window !== 'undefined' ? window.devToolsExtension() : f => f;

  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(thunk),
      devMiddleware
    )
  );
};
