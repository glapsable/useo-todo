import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';
import selectNotes from '../selectors/notes';
import { toggleNoteComplete, removeNote } from '../actions/notes';

const TodoListItemsList = ({ notes, dispatch }) => {
  const onToggleNoteComplete = (id) => {
    dispatch(toggleNoteComplete({ id }));
  };
  const onRemoveNote = (id) => {
    dispatch(removeNote({ id }));
  };
  return (
    <div className="list-items-list">
      {notes.map(note => (
        <TodoListItem
          key={note.id}
          {...note}
          onToggleNoteComplete={onToggleNoteComplete}
          onRemoveNote={onRemoveNote}
        />
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
