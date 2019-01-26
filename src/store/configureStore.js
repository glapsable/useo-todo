import { createStore } from 'redux';
import notesReducer from '../reducers/notes';

export default () => {
  const store = createStore(notesReducer);

  return store;
};
