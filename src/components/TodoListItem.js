import React from 'react';

const TodoListItem = () => (
  <div className="list-item">
    <div className="table-row">
      <div className="table-row__cell table-row__cell--1">
        <input type="checkbox" />
      </div>
      <div className="table-row__cell table-row__cell--2">
        <p>Lorem ipsum dolor</p>
      </div>
      <div className="table-row__cell table-row__cell--3">2016.01.02</div>
      <div className="table-row__cell table-row__cell--4 list-item__actions">
        <p>ok</p>
        <p>x</p>
      </div>
    </div>
  </div>
);

export default TodoListItem;
