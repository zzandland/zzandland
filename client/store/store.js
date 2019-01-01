import { createStore } from 'redux';
import rootReducer from '../reducers';

const preloadedState = window.__PRELOADED_STATE__;

export default createStore(
  rootReducer,
  preloadedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
