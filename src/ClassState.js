import React from 'react';
import { Loading } from './Loading';

const SECURITY_CODE = 'Perro';

class ClassState extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: '',
			voidError: false,
			error: false,
			loading: false,
		};
	}

	// componentDidMount() {

	// }
	componentDidUpdate() {
		console.log('componentDidUpdate');

		if (!!this.state.loading) {
			setTimeout(() => {
				// console.log('validation');

				if (this.state.value === '') {
					this.setState({ loading: false, voidError: true, error: false });
					return;
				}
				if (this.state.value !== SECURITY_CODE) {
					this.setState({ loading: false, voidError: false, error: true });
					return;
				}
				this.setState({ loading: false });

				// console.log('end validation');
			}, 2000);
		}
	}

	render() {
		const name = this.props.name;
		const voidError = this.state.voidError;
		const error = this.state.error;
		const loading = this.state.loading;
		const inputValue = this.state.value;

		return (
			<div>
				<h2>Delete {name}</h2>
				<p>Please, type the secure code to delete this component.</p>

				{error && <p className="error">Error: Wrong code</p>}

				{voidError && <p className="error">Error: Cannot be empty</p>}

				{loading && <Loading />}

				<input
					placeholder="Security code"
					value={inputValue}
					onChange={(event) => {
						this.setState({ value: event.target.value });
					}}
				/>
				<button onClick={() => this.setState({ loading: true, error: false, voidError: false })}>Check</button>
			</div>
		);
	}
}

export { ClassState };
