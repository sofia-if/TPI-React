/*formulario para actualizar o editar tareas */
import { useRef, useState } from 'react';
import { FaEdit } from 'react-icons/fa';/*importacion para usar iconos fa*/
import { useForm } from '../hooks/useForm';

export const TodoUpdate = ({ todo, handleUpdateTodo }) => {
	const { updateDescription, onInputChange } = useForm({
		updateDescription: todo.description,
	});

	const [disabled, setDisabled] = useState(true);
	const focusInputRef = useRef();

	return (
		<form >
			<input
				type='text'
				className={`input-update ${
					todo.done ? 'text-decoration-dashed' : ''
				}`}
				name='updateDescription'
				value={updateDescription}
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
				readOnly={disabled}
				ref={focusInputRef}
			/>
		</form>
	);
};
