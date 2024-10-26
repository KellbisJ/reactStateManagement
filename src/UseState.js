import React from 'react';

const UseState = ({ name }) => {
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(false);

	React.useEffect(() => {
		console.log('effect starting');
		console.log('effect end');

		if (!!loading) {
			setTimeout(() => {
				console.log('validation');

				setLoading(false);

				console.log('end validation');
			}, 2000);
		}
	}, [loading]);
	return (
		<div>
			<h2>Delete {name}</h2>
			<p>Please, type the secure code to delete this component.</p>

			{error && <p className="error">Error: Wrong code</p>}
			{loading && <p className="loading">Loading...</p>}

			<input placeholder="Security code" />
			<button onClick={() => setLoading(true)}>Check</button>
		</div>
	);
};

export { UseState };
