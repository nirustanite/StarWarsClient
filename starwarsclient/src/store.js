import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './store/reducers';
import createSagaMiddleware from 'redux-saga';
import { watchgetfilmslist } from './store/saga';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const sagaMiddleware = createSagaMiddleware()

const enhancer = composeEnhancers(
  applyMiddleware(sagaMiddleware)
)


const store = createStore(reducer, enhancer)

sagaMiddleware.run(watchgetfilmslist);

export default store;