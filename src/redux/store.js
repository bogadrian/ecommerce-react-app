import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';

import rootReducer from './root-reducer';

const middlwares = [];

if (process.env.NODE_ENV !== 'development') {
  middlwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlwares));

export const persistor = persistStore(store);
