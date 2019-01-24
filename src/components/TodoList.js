import React from 'react';
import TodoListHeader from './TodoListHeader';
import TodoListForm from './TodoListForm';
import TodoListItemsList from './TodoListItemsList';

const TodoList = () => (
  <div className="todo-list">
    <TodoListHeader />
    <TodoListForm />
    <TodoListItemsList />
  </div>
);

export default TodoList;
