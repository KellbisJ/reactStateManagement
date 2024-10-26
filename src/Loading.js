import React from 'react';

class Loading extends React.Component {
	componentWillUnmount() {
		// console.log('componentWillUnmount');

		return null;
	}
	render() {
		return <p className="loading">Loading...</p>;
	}
}

export { Loading };
