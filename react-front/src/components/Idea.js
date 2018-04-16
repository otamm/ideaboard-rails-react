import React, { Component } from 'react';

/*
// this is a stateless component, bascially used only for rendering
const Idea = ({idea}) =>
  (
  	<div className="tile" key={idea.id}>
      <h4>{idea.title}</h4>
      <p>{idea.body}</p>
    </div>
  )
*/

class Idea extends Component {
	handleClick = () => {
		this.props.onClick(this.props.idea.id) // will send this idea instance's id as an argument for function handling onClick
	}

	render () {
	    return(
	      <div className="tile">
		    <span className="deleteButton">
			  x
			</span>
	        <h4 onClick={this.handleClick}>
	          {this.props.idea.title}
	        </h4>
	        <p onClick={this.handleClick}>
	          {this.props.idea.body}
	        </p>
	      </div>
	    )
    }
}

export default Idea;