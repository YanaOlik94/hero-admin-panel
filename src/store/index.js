import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import heroes from '../reducers/heroes';
import filters from '../reducers/filters';

const stringMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'string') {
    // allows to work with strings instead objects
    return next({
      type: action,
    });
  }
  return next(action);
};

const store = createStore(
                    combineReducers({ heroes, filters }),
                    compose(
                      applyMiddleware(stringMiddleware),
                      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
                    );

export default store;
