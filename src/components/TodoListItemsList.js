import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoListItemsList = ({ notes }) => (
  <div className="list-items-list">
    {notes.map(note => <TodoListItem content={note.content} deadline={note.deadline} />)}
  </div>
);

TodoListItemsList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

TodoListItemsList.defaultProps = {
  notes: [],
};

const ConnectedTodoListItemsList = connect(state => ({
  notes: state,
}))(TodoListItemsList);

export default ConnectedTodoListItemsList;
