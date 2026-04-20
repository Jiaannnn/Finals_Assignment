import React, { createContext, useState, useEffect } from 'react';

export interface Todo {
  id: string;
  title: string;
  isCompleted: boolean;
}

interface TodoContextType {
  todos: Todo[];
  addTodo: (title: string) => Promise<void>;
  updateTodo: (id: string, updatedTodo: Todo) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}

export const TodoContext = createContext<TodoContextType | undefined>(undefined);

export const TodoProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const API_URL = 'http://localhost:5000/api/todos';

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      const response = await fetch(API_URL);
      if (response.ok) {
        const data = await response.json();
        setTodos(data);
      }
    } catch (error) {
      console.error("Failed to fetch todos", error);
    }
  };

  const addTodo = async (title: string) => {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, isCompleted: false })
    });
    if (response.ok) {
      const newTodo = await response.json();
      setTodos(prev => [...prev, newTodo]);
    }
  };

  const updateTodo = async (id: string, updatedTodo: Todo) => {
    const response = await fetch(`${API_URL}/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedTodo)
    });
    if (response.ok) {
      setTodos(prev => prev.map(todo => todo.id === id ? updatedTodo : todo));
    }
  };

  const deleteTodo = async (id: string) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    if (response.ok) {
      setTodos(prev => prev.filter(todo => todo.id !== id));
    }
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, updateTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  );
};
