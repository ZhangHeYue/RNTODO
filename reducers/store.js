import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';

import reducer from './index';

const store = createStore(
  reducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(createLogger({
      predicate: true,
    }))
  )
);

export default store;

