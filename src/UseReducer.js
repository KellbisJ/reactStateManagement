import React from 'react';

const SECURITY_CODE = 'Perro';

const UseReducer = ({ name }) => {
	const [state, dispatch] = React.useReducer(reducer, initialState);
	// With compose states with useState hook, remember to use the spread operator to keep the previous state.

	console.log(state);

	React.useEffect(() => {
		if (!!state.loading) {
			setTimeout(() => {
				if (state.value === '') {
					dispatch({
						type: 'VOID_ERROR',
					});
					return;
				}
				if (state.value !== SECURITY_CODE) {
					dispatch({
						type: 'ERROR',
					});
					return;
				}
				dispatch({
					type: 'CONFIRMED',
				});
			}, 2000);
		}
	}, [state.loading]);
	if (!state.confirmed && !state.deleted) {
		return (
			<div>
				<h2>Delete {name}</h2>
				<p>Please, type the secure code to delete this component.</p>

				{state.voidError && <p className="error">Error: Cannot be empty</p>}
				{state.error && <p className="error">Error: Wrong code</p>}
				{state.loading && <p className="loading">Loading...</p>}

				<input
					placeholder="Security code"
					value={state.value}
					onChange={(e) => {
						dispatch({
							type: 'SECURITY_CODE_FIELD',
							payload: e.target.value,
						});
					}}
				/>
				<button
					onClick={() => {
						dispatch({ type: 'CHECK_SECURITY_CODE' });
					}}>
					Check
				</button>
			</div>
		);
	} else if (!!state.confirmed && !state.deleted) {
		return (
			<React.Fragment>
				<p>Are you sure you want to delete this component?</p>
				<button
					onClick={() => {
						dispatch({ type: 'DELETE' });
					}}>
					Yes, delete
				</button>
				<button
					onClick={() => {
						dispatch({ type: 'RESET' });
					}}>
					No, go back
				</button>
			</React.Fragment>
		);
	} else {
		return (
			<React.Fragment>
				<p>The component has been deleted</p>
				<button
					onClick={() => {
						dispatch({ type: 'RESET' });
					}}>
					Reset and go back
				</button>
			</React.Fragment>
		);
	}
};

const initialState = {
	value: '',
	voidError: false,
	error: false,
	loading: false,
	confirmed: false,
	deleted: false,
};

const reducerObject = (state, payload) => ({
	VOID_ERROR: {
		...state,
		loading: false,
		voidError: true,
		error: false,
	},
	ERROR: {
		...state,
		loading: false,
		voidError: false,
		error: true,
	},
	CONFIRMED: {
		...state,
		loading: false,
		voidError: false,
		error: false,
		confirmed: true,
	},
	SECURITY_CODE_FIELD: {
		...state,
		value: payload,
	},
	CHECK_SECURITY_CODE: {
		...state,
		loading: true,
		voidError: false,
		error: false,
	},
	DELETE: {
		...state,
		deleted: true,
	},
	RESET: {
		...state,
		confirmed: false,
		deleted: false,
		value: '',
	},
});

const reducer = (state, action) => {
	return reducerObject(state, action.payload)[action.type] ? reducerObject(state, action.payload)[action.type] : { ...state };
};
// const reducer = (state, action) => {
// 	if (reducerObject(state, action.payload)[action.type]) {
// 		return reducerObject(state, action.payload)[action.type];
// 	} else {
// 		return { ...state };
// 	}
// };

export { UseReducer };
