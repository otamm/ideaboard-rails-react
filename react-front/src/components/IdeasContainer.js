import React, { Component } from 'react';
import axios from 'axios'; // api calls
import Idea from './Idea' // stateless component

class IdeasContainer extends Component {
	/* protocol functions */
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
				<button className="new-idea-button"
				onClick={this.addNewIdea} >
					New Idea
				</button>
				{	this.state.ideas.map(function(idea) {
						return (<Idea idea={idea} key={idea.id} />);
					})
				}
			</div>
		)

	}
	/* custom functions */
	addNewIdea() {
		axios.post(
	    'http://localhost:3001/',
	    { idea:
	      {
	        title: '',
	        body: ''
	      }
	    }
	  )
	  .then(response => {
	    console.log(response)
	  })
	  .catch(error => console.log(error))
	}
}

export default IdeasContainer;