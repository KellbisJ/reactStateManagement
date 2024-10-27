import React from 'react';

const SECURITY_CODE = 'Perro';

const UseState = ({ name }) => {
	const [state, setState] = React.useState({
		value: '',
		voidError: false,
		error: false,
		loading: false,
	});
	// With compose states with useState hook, remember to use the spread operator to keep the previous state.

	console.log(state);

	React.useEffect(() => {
		if (!!state.loading) {
			setTimeout(() => {
				if (state.value === '') {
					setState({ ...state, loading: false, voidError: true, error: false });
					return;
				}
				if (state.value !== SECURITY_CODE) {
					setState({ ...state, loading: false, voidError: false, error: true });
					return;
				}
				setState({ ...state, loading: false, voidError: false, error: false });
			}, 2000);
		}
	}, [state.loading]);
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
					setState({ ...state, value: e.target.value });
				}}
			/>
			<button
				onClick={() => {
					setState({ ...state, loading: true, voidError: false, error: false }); // Set all the errors in false mode for avoid that errors appears in a new validation
				}}>
				Check
			</button>
		</div>
	);
};

export { UseState };
