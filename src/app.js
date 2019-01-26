import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import UseoTodo from './components/UseoTodo';
import configureStore from './store/configureStore';
import { addNote, toggleNoteComplete } from './actions/notes';
import getNotes from './selectors/notes';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const note1 = store.dispatch(addNote({ content: 'Notatka1', deadline: '1999-12-12' }));
store.dispatch(addNote({ content: 'Notatka2' }));
setTimeout(() => {
  store.dispatch(toggleNoteComplete({ id: note1.note.id }));
  console.log(store.getState());
}, 3000);

const state = store.getState();
const notes = getNotes(state);
console.log(notes);

const jsx = (
  <Provider store={store}>
    <UseoTodo />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
