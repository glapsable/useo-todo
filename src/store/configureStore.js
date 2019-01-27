import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import notesReducer from '../reducers/notes';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    notesReducer,
    composeEnhancers(applyMiddleware(thunk)),
  );

  return store;
};
