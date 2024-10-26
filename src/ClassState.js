import React from 'react';

class ClassState extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: false,
		};
	}
	render() {
		const name = this.props.name;
		const error = this.state.error;

		return (
			<div>
				<h2>Delete {name}</h2>
				<p>Please, type the secure code to delete this component.</p>

				{error && <p className="error">Error: Wrong code</p>}

				<input placeholder="Security code" />
				<button onClick={() => this.setState((prevState) => ({ error: !prevState.error }))}>Check</button>
			</div>
		);
	}
}

export { ClassState };
