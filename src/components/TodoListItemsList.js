import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import selectNotes from '../selectors/notes';
import { toggleNoteComplete as toggleNote } from '../actions/notes';

const TodoListItemsList = ({ notes, dispatch }) => {
  const toggleNoteComplete = (id) => {
    console.log('toggleCompleteNote', id);
    dispatch(toggleNote({ id }));
  };
  return (
    <div className="list-items-list">
      {notes.map(note => (
        <TodoListItem {...note} toggleNoteComplete={toggleNoteComplete} key={note.id} />
      ))}
    </div>
  );
};

TodoListItemsList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object),
  dispatch: PropTypes.func.isRequired,
};

TodoListItemsList.defaultProps = {
  notes: [],
};

const mapStateToProps = state => ({
  notes: selectNotes(state),
});

export default connect(mapStateToProps)(TodoListItemsList);
