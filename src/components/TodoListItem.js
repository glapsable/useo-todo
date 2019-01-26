import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({
  id, content, deadline, completed, onToggleNoteComplete, onRemoveNote,
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
        <input type="checkbox" checked={completed} onChange={() => onToggleNoteComplete(id)} />
        <button type="button" onClick={() => onRemoveNote(id)}>X</button>
      </div>
    </div>
  </div>
);

TodoListItem.propTypes = {
  content: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  onToggleNoteComplete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
  onRemoveNote: PropTypes.func.isRequired,
};

TodoListItem.defaultProps = {
  deadline: '',
};

export default TodoListItem;
