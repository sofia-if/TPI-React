import React from 'react';
import { FaTrash } from 'react-icons/fa';
import { TodoUpdate } from './TodoUpdate';

export const TodoItem = ({
	todo,
	handleUpdateTodo,
	handleDeleteTodo,
	handleCompleteTodo,
}) => {
	return (
		<li>
			<span onClick={() => handleCompleteTodo(todo.id)}>
				<label
					className={`container-done ${todo.done ? 'active' : ''}`} /* para que se complete si esta activo, en caso contrario no muestre nada */
				></label>
			</span>
			<TodoUpdate todo={todo} handleUpdateTodo={handleUpdateTodo} />
			<button
				className='btn-delete'
				onClick={() => handleDeleteTodo(todo.id)}
			>
				<FaTrash />
			</button>
		</li>
	);
};
