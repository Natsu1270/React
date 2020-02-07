import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist'
import logger from 'redux-logger';
import rootReducer from './root-reducer';
// import thunk from 'redux-thunk'

import rootSaga from './root-saga'
import createSagaMiddleware from 'redux-saga'

// import { fetchCollectionStart } from './shop/shop.saga'

const sagaMiddleware = createSagaMiddleware()

// const middlewares = [thunk];
const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger)
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga)

export const persistor = persistStore(store)

export default { store, persistor };