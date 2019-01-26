import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import selectNotes from '../selectors/notes';

const TodoListItemsList = ({ notes }) => (
  <div className="list-items-list">
    {notes.length ? (
      notes.map(note => (
        <TodoListItem
          key={note.id}
          {...note}
        />
      ))
    ) : <p>There is no any notes ;(</p>}
  </div>
);

TodoListItemsList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
};

TodoListItemsList.defaultProps = {
  notes: [],
};

const mapStateToProps = state => ({
  notes: selectNotes(state),
});

export default connect(mapStateToProps)(TodoListItemsList);
