import React from 'react';
import { Loading } from './Loading';

class ClassState extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			error: true,
			loading: false,
		};
	}

	// componentDidMount() {

	// }
	componentDidUpdate() {
		// console.log('componentDidUpdate');

		if (!!this.state.loading) {
			setTimeout(() => {
				// console.log('validation');

				this.setState({ loading: false });

				// console.log('end validation');
			}, 2000);
		}
	}

	render() {
		const name = this.props.name;
		const error = this.state.error;
		const loading = this.state.loading;

		return (
			<div>
				<h2>Delete {name}</h2>
				<p>Please, type the secure code to delete this component.</p>

				{error && <p className="error">Error: Wrong code</p>}

				{loading && <Loading />}

				<input placeholder="Security code" />
				<button onClick={() => this.setState({ loading: true })}>Check</button>
			</div>
		);
	}
}

export { ClassState };
