import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducers';
import logger from '../middlewares/logger';

import initStorageClient from './local-storage-client';

export default (initialState = {}) => {
  const devMiddleware = typeof window !== 'undefined' ? window.devToolsExtension() : f => f;
  const enhancedThunk = thunk.withExtraArgument({ storageClient: initStorageClient() });

  return createStore(
    reducer,
    initialState,
    compose(
      applyMiddleware(enhancedThunk, logger),
      devMiddleware
    )
  );
};
