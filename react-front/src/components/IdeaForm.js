import React, { Component } from 'react';
import axios from 'axios';

class IdeaForm extends Component {
	constructor(props) {
	    super(props);
	    this.state = {
	    	title: this.props.idea.title, // turning something into a prop makes it accessible to other components
	    	body: this.props.idea.body
	    }
  	}

  	handleInput = (e) => {
  		this.setState( {[e.target.name]: e.target.value })
  	}

  	handleBlur = () => { // gets called after clicking outside ('blurring out') of an IdeaForm component
  		const idea = {
  			title: this.state.title,
  			body: this.state.body
  		}
  		axios.put(
  			`http://localhost:3001/api/v1/ideas/${this.props.idea.id}`,
  			{ 
  				idea: idea
  		})
  		.then(response => {
  			console.log(response);
  			this.props.updateIdea(response.data); // triggers updateIdea function in IdeasContainer component with the updated idea as its argument
  		})
  		.catch(function(error) {
  			console.log(error);
  		});
  	}

  	render() { // onBlur executes once user leaves input field
	    return (
	      <div className="tile">
	        <form onBlur={this.handleBlur}>
	          <input 
	            className='input' 
	            type="text"
	            name="title" 
	            placeholder='Enter a Title'
	            value={this.state.title}
	            onChange={this.handleInput} 
	        	ref={this.props.titleRef} /> {/* Refs provide a way to access DOM nodes or React elements created in the render method */}
	          <textarea 
	            className='input' 
	            name="body"
	            placeholder='Describe your idea'
	            value={this.state.body}
	            onChange={this.handleInput}>
	            </textarea>
	        </form>
	      </div>
	    );
    }

}

export default IdeaForm;