import React from 'react';
import { useForm } from '../hooks/useForm';

export const TodoAdd = ({ handleNewTodo }) => { /* se crea un formulario vacio, necesiamos que tenga description como un string vacio */
	const { description, onInputChange, onResetForm } = useForm({
		description: '',
	});

	const onFormSubmit = e => {
		e.preventDefault();

		if (description.length <= 1) return  /* compruebo si la descripcion es mayor a 1, para no agregar nada sin contenido */;

		let newTodo = { /* se crea el esquema del newTodo, con un diccionario que tiene id(simula id con time para identificardo)) y descripcion dejando por defecto en falso */
			id: new Date().getTime(),
			description: description,
			done: false,
		};

		handleNewTodo(newTodo);
		onResetForm(); /* para que el campo de agregar quede se resetee despues de ingresar algo */
	};

	return (
		<form onSubmit={onFormSubmit}>
			<input
				type='text'
				className='input-add'
				name='description'
				value={description}
				onChange={onInputChange}
				placeholder='¿Qué hay que hacer?'
			/>

			<button className='btn-add' type='submit'>
				Agregar
			</button>
		</form>
	);
};
