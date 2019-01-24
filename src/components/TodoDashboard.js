import React from 'react';
import TodoList from './TodoList';

const TodoDashboard = () => (
  <main className="dashboard">
    <div className="content-container">
      <h2 className="dashboard__title">My Todo List</h2>
      <TodoList />
      <button className="button dashboard__button" type="button">Load more</button>
    </div>
  </main>
);

export default TodoDashboard;
