import 'regenerator-runtime/runtime';
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './store/reducers';
import api from './store/middleware/api';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const enhancer = composeEnhancers(
  applyMiddleware(api)
)

const store = createStore(reducer, enhancer)

export default store;