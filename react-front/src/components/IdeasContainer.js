import React, { Component } from 'react';
import axios from 'axios'; // api calls
import update from 'immutability-helper'; // mutate a copy of data without changing the original source: https://github.com/kolodny/immutability-helper
import Idea from './Idea'; // stateless component
import IdeaForm from './IdeaForm'; // makes an idea cell into a form to create and edit idea

class IdeasContainer extends Component {
	/* protocol functions */

	constructor(props) {
    	super(props);
    	this.state = {
        	ideas: [],
        	editingIdeaId: null
    	}
    }

	componentDidMount() {
		axios.get('http://localhost:3001/')
		.then(response => {
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
				<button className="new-idea-button"
				onClick={this.addNewIdea} >
					New Idea
				</button>
				{	this.state.ideas.map((idea) => {
						if (this.state.editingIdeaId === idea.id) {
							return (<IdeaForm idea={idea} key={idea.id} />);
						} else {
							return (<Idea idea={idea} key={idea.id} />);
						}
					})
				}
			</div>
		)

	}
	/* custom functions */
	//addNewIdea() {
	addNewIdea = () => { // if declaring function as the line above, 'this' refers to the function and not the instance. Yeah.
		axios.post(
	    'http://localhost:3001/api/v1/ideas',
	    { idea:
	      {
	        title: '',
	        body: ''
	      }
	    }
	  )
	  .then(response => {
	    console.log(response);
	    const ideas = update(this.state.ideas, { // 
	    	$splice: [[0,0,response.data]] // inserts new idea (response.data) at the beginning of the rendered idea array
	    });
	    this.setState({
	    	ideas: ideas,
	    	editingIdeaId: response.data.id
	    });
	  })
	  .catch(function(error) { console.log(error); } );
	}
}

export default IdeasContainer;