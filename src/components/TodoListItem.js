import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({ content, deadline }) => (
  <div className="list-item">
    <div className="table-row">
      <div className="table-row__cell table-row__cell--1">
        <input type="checkbox" />
      </div>
      <div className="table-row__cell table-row__cell--2">
        <p>{content}</p>
      </div>
      <div className="table-row__cell table-row__cell--3">{deadline}</div>
      <div className="table-row__cell table-row__cell--4 list-item__actions">
        <p>ok</p>
        <p>x</p>
      </div>
    </div>
  </div>
);

TodoListItem.propTypes = {
  content: PropTypes.string.isRequired,
  deadline: PropTypes.string,
};

TodoListItem.defaultProps = {
  deadline: '',
};

export default TodoListItem;
