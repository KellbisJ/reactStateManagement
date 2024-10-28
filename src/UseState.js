import React from 'react';

const SECURITY_CODE = 'Perro';

const UseState = ({ name }) => {
	const [state, setState] = React.useState({
		value: '',
		voidError: false,
		error: false,
		loading: false,
		confirmed: false,
		deleted: false,
	});
	// With compose states with useState hook, remember to use the spread operator to keep the previous state.
	const isVoidError = () => {
		setState({ ...state, loading: false, voidError: true, error: false });
	};
	const isError = () => {
		setState({ ...state, loading: false, voidError: false, error: true });
	};
	const isConfirmed = () => {
		setState({ ...state, loading: false, voidError: false, error: false, confirmed: true });
	};

	const securityCodeField = (newValue) => {
		setState({ ...state, value: newValue });
	};

	const checkSecurityCode = () => {
		setState({ ...state, loading: true, voidError: false, error: false });
	};
	const isDeleted = () => {
		setState({ ...state, deleted: true });
	};
	const reset = () => {
		setState({ ...state, confirmed: false, deleted: false, value: '' });
	};

	console.log(state);

	React.useEffect(() => {
		if (!!state.loading) {
			setTimeout(() => {
				if (state.value === '') {
					isVoidError();
					return;
				}
				if (state.value !== SECURITY_CODE) {
					isError();
					return;
				}
				isConfirmed();
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
						securityCodeField(e.target.value);
					}}
				/>
				<button
					onClick={() => {
						checkSecurityCode(); // Set all the errors in false mode for avoid that errors appears in a new validation
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
						isDeleted();
					}}>
					Yes, delete
				</button>
				<button
					onClick={() => {
						reset();
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
						reset();
					}}>
					Reset and go back
				</button>
			</React.Fragment>
		);
	}
};

export { UseState };
