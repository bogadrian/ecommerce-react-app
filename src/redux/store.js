import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root.saga';

const sagaMiddleware = createSagaMiddleware();

const middlwares = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middlwares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlwares));

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
