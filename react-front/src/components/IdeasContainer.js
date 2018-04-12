import React, { Component } from 'react';
import axios from 'axios'; // api calls
import Idea from './Idea' // stateless component

class IdeasContainer extends Component {

	constructor(props) {
    	super(props);
    	this.state = {
        	ideas: []
    	}
    }

	componentDidMount() {
		var _this = this;
		axios.get('http://localhost:3001/')
		.then(function(response) {
			console.log(response);
			_this.setState({ ideas: response.data });
		})
		.catch(function(error) {
			console.log(error);
		});
	}

	render() {
		return (
			<div>
				
				{	this.state.ideas.map(function(idea) {
						return (<Idea idea={idea} key={idea.id} />);
					})
				}
			</div>
		)

	}
}

export default IdeasContainer;