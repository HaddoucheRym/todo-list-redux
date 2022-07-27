import React from 'react';
import logo from './logo.svg';
import '../App.css';
import { Todo } from '../features/todos/components/Todo';
import { TodoList } from '../features/todos/layouts/TodoList';
import { Routes, Route, Outlet } from 'react-router-dom';
import { DetailTodo } from '../features/todos/layouts/DetailTodo';
import { AddTodo } from '../features/todos/layouts/AddTodo';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<TodoList />} />
        <Route path="todo" element={<TodoList />} />
        <Route path=":todoId" element={<DetailTodo />} />
        <Route path="add" element={<AddTodo />} />
      </Routes>
    </>
  );
}

export default App;
