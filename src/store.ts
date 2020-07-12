import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import { reducer } from './reducers';

import { Dispatch, AnyAction } from 'redux';

const stringMiddleware = () => (next: Dispatch) => (action: AnyAction) => {
  if (typeof action === 'string') {
    return next({ type: action });
  }

  return next(action);
};

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, stringMiddleware)
);

export default store;
