import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({
  id, content, deadline, completed, toggleNoteComplete,
}) => (
  <div className="list-item">
    <div className="table-row">
      <div className="table-row__cell table-row__cell--1">
        <input type="checkbox" />
      </div>
      <div className="table-row__cell table-row__cell--2">
        <p className={completed && 'list-item__completed'}>{content}</p>
      </div>
      <div className="table-row__cell table-row__cell--3">{deadline}</div>
      <div className="table-row__cell table-row__cell--4 list-item__actions">
        <input type="checkbox" checked={completed} onChange={() => toggleNoteComplete(id)} />
        <p>x</p>
      </div>
    </div>
  </div>
);

TodoListItem.propTypes = {
  content: PropTypes.string.isRequired,
  deadline: PropTypes.string,
  completed: PropTypes.bool.isRequired,
  toggleNoteComplete: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

TodoListItem.defaultProps = {
  deadline: '',
};

export default TodoListItem;
