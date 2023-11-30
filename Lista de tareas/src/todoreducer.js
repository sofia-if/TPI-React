/* 
    todo: {
        id: 212310301231,
        description: "Aprender Php"
        done: 
    }

*/

export const todoReducer = (initialState, action) => {
	switch (action.type) {
		case 'Add Todo':
			return [...initialState, action.payload];

		case 'Delete Todo':
			return initialState.filter(todo => todo.id !== action.payload); /*.filter retorna un nuevo arreglo para no mutar el estado inicial */

		case 'Complete Todo':
			return initialState.map(todo => { /* el map tambien retorna un nuevo arreglo */
				if (todo.id === action.payload) { /* comprobamos si el TODO es igual action.payload para que retorne todo lo que esta en el TODO */
					return {
						...todo, /* retorna un nuevo objeto esparciendo los elementos del TODO, restableciendo el valor de done */
						done: !todo.done,
					};
				}

				return todo;
			});

		case 'Update Todo':
			return initialState.map(todo => {
				if (todo.id === action.payload.id) {
					return {
						...todo,
						description: action.payload.description,
					};
				}

				return todo;
			});

		default:
			return initialState;
	}
};
