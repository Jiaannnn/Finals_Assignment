import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useTodos } from '../hooks/useTodos';
import { useNavigate } from 'react-router-dom';
import Modal from './Modal';

interface TodoFormInputs {
  title: string;
}

export const AddTodoForm: React.FC = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<TodoFormInputs>();
  const { addTodo } = useTodos();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const onSubmit = async (data: TodoFormInputs) => {
    await addTodo(data.title);
    setIsModalOpen(true);
    reset();
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit(onSubmit)} className="todo-form">
        <div className="form-group">
          <input 
            {...register('title', { 
              required: 'Title is required', 
              minLength: { value: 3, message: 'Minimum 3 characters' } 
            })}
            placeholder="Enter new todo"
            className="todo-input"
          />
          <button type="submit" className="btn btn-primary">Add Todo</button>
        </div>
        {errors.title && <span className="error">{errors.title.message}</span>}
      </form>
      
      {isModalOpen && (
        <Modal onClose={handleCloseModal}>
          <h3>Success!</h3>
          <p>Todo has been added successfully.</p>
          <button className="btn btn-primary" onClick={handleCloseModal}>OK</button>
        </Modal>
      )}
    </div>
  );
};
