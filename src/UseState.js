import React from 'react';

const SECURITY_CODE = 'Perro';

const UseState = ({ name }) => {
	const [value, setValue] = React.useState('');
	const [voidError, setVoidError] = React.useState(false);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	console.log(value);

	React.useEffect(() => {
		// console.log('effect starting');
		// console.log('effect end');

		if (!!loading) {
			setTimeout(() => {
				// console.log('validation');

				if (value === '') {
					setLoading(false);
					setVoidError(true);
					return;
				}
				if (value !== SECURITY_CODE) {
					setLoading(false);
					setError(true);
					return;
				}
				setLoading(false);

				// console.log('end validation');
			}, 2000);
		}
	}, [loading]);
	return (
		<div>
			<h2>Delete {name}</h2>
			<p>Please, type the secure code to delete this component.</p>

			{voidError && <p className="error">Error: Cannot be empty</p>}
			{error && <p className="error">Error: Wrong code</p>}
			{loading && <p className="loading">Loading...</p>}

			<input
				placeholder="Security code"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
				}}
			/>
			<button
				onClick={() => {
					setLoading(true);
					// Set all the errors in false mode for avoid that errors appears in a new validation
					setError(false);
					setVoidError(false);
				}}>
				Check
			</button>
		</div>
	);
};

export { UseState };
