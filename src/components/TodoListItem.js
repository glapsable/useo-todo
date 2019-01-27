import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { removeNote as startRemoveNote, toggleNoteComplete as startToggleNoteComplete } from '../actions/notes';

const TodoListItem = ({
  id, content, deadline, completed, removeNote, toggleNoteComplete,
}) => (
  <div className="list-item">
    <div className="table-row">
      <div className="table-row__cell table-row__cell--1">
        <input type="checkbox" />
      </div>
      <div className="table-row__cell table-row__cell--2">
        <p className={completed ? 'list-item__completed' : ''}>{content}</p>
      </div>
      <div className="table-row__cell table-row__cell--3">
        <p className={completed ? 'list-item__completed' : ''}>{deadline}</p>
      </div>
      <div className="table-row__cell table-row__cell--4 list-item__actions">
        <input type="checkbox" checked={completed} onChange={() => toggleNoteComplete({ id })} />
        <button type="button" onClick={() => removeNote({ id })}>X</button>
      </div>
    </div>
  </div>
);

TodoListItem.propTypes = {
  content: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  id: PropTypes.number.isRequired,
  removeNote: PropTypes.func.isRequired,
  toggleNoteComplete: PropTypes.func.isRequired,
};

TodoListItem.defaultProps = {
  deadline: '',
};

const mapDispatchToProps = dispatch => ({
  removeNote: id => dispatch(startRemoveNote(id)),
  toggleNoteComplete: id => dispatch(startToggleNoteComplete(id)),
});

export default connect(undefined, mapDispatchToProps)(TodoListItem);
