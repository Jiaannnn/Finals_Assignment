import React, { useState } from 'react';
import { Todo } from '../context/TodoContext';
import { useTodos } from '../hooks/useTodos';

interface TodoItemProps {
  todo: Todo;
}

export const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { updateTodo, deleteTodo } = useTodos();
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  const handleToggleComplete = () => {
    updateTodo(todo.id, { ...todo, isCompleted: !todo.isCompleted });
  };

  const handleSaveEdit = () => {
    if (editTitle.trim() && editTitle !== todo.title) {
      updateTodo(todo.id, { ...todo, title: editTitle });
    }
    setIsEditing(false);
  };

  return (
    <div className={`todo-item ${todo.isCompleted ? 'completed' : ''}`}>
      <div className="todo-content">
        <input 
          type="checkbox" 
          checked={todo.isCompleted} 
          onChange={handleToggleComplete}
          className="todo-checkbox"
        />
        
        {isEditing ? (
          <input 
            type="text" 
            value={editTitle}
            onChange={(e) => setEditTitle(e.target.value)}
            onBlur={handleSaveEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleSaveEdit()}
            autoFocus
            className="edit-input"
          />
        ) : (
          <span className="todo-title">{todo.title}</span>
        )}
      </div>

      <div className="todo-actions">
        <button className="btn btn-edit" onClick={() => setIsEditing(!isEditing)}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};
