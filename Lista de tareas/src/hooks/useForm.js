import { useState } from 'react';

export const useForm = (initialForm = {}) => {
	const [formState, setFormState] = useState(initialForm);

	const onInputChange = (e) => {
		const name = e.target.name; /* obtengo el nombre del evento y el valor */
		const value = e.target.value;

		setFormState({ /*actuaizo mi estado de formulario y creo un diccionario */
			...formState,
			[name]: value,
		});
	};

	const onResetForm = () => { /* funciona para reiniciar o resetear el formulario */
		setFormState(initialForm);
	};

	return {
		...formState,
		formState,
		onInputChange,
		onResetForm,
	};
};
