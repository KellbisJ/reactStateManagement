const inicialState = {
	value: '',
	voidError: false,
	error: false,
	loading: false,
	confirmed: false,
	deleted: false,
};

// const reducerIf = (state, action) => {
// 	if (action.type === 'VOID_ERROR') {
// 		return {
// 			...state,
// 			loading: false,
// 			voidError: true,
// 			error: false,
// 		};
// 	} else if (action.type === 'ERROR') {
// 		return {
// 			...state,
// 			loading: false,
// 			voidError: false,
// 			error: true,
// 		};
// 	}
// };

const reducerSwitch = (state, action) => {
	switch (action.type) {
		case 'VOID_ERROR':
			return {
				...state,
				loading: false,
				voidError: true,
				error: false,
			};
		case 'ERROR':
			return {
				...state,
				loading: false,
				voidError: false,
				error: true,
			};
		default:
			return { ...state };
	}
};

const reducerObject = (state) => ({
	ERROR: {
		...state,
		loading: false,
		voidError: false,
		error: true,
	},
	VOID_ERROR: {
		...state,
		loading: false,
		voidError: true,
		error: false,
	},
});

const reducer = (state, action) => {
	// if (reducerObject(state)[action.type]) {
	// 	return reducerObject(state)[action.type];
	// } else {
	// 	return { ...state };
	// }
	return reducerObject(state)[action.type] ? reducerObject(state)[action.type] : { ...state };
};
