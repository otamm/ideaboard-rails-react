import React, { Component } from 'react';
import axios from 'axios'; // api calls

class IdeasContainer extends Component {
	componentDidMount() {
		axios.get('http://localhost:3001/api/v1/ideas.json')
		.then(function(response) {
			this.setState({ ideas: response.data });
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				Ideas
			</div>
		)

	}
}

export default IdeasContainer;