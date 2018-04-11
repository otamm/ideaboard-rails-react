import React, { Component } from 'react';
import axios from 'axios'; // api calls

class IdeasContainer extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
        	ideas: []
    	}
    }

	componentDidMount() {
		axios.get('http://localhost:3001/')
		.then(function(response) {
			console.log(response);
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