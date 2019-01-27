import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { startSetNotes } from './actions/notes';
import UseoTodo from './components/UseoTodo';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <UseoTodo />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetNotes()).then(() => {
  ReactDOM.render(jsx, document.getElementById('app'));
});
