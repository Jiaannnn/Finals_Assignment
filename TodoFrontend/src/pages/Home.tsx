import React from 'react';
import { AddTodoForm } from '../components/AddTodoForm';
import { TodoList } from '../components/TodoList';

const Home: React.FC = () => {
  return (
    <div className="page home-page">
      <header className="page-header">
        <h1>Todo Management Dashboard</h1>
        <p>Keep track of your tasks efficiently.</p>
      </header>
      
      <section className="todo-section">
        <AddTodoForm />
        <TodoList />
      </section>
    </div>
  );
};

export default Home;
