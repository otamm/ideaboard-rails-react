import React from 'react'

// this is a stateless component, bascially used only for rendering
const Idea = ({idea}) =>
  (
  	<div className="tile" key={idea.id}>
      <h4>{idea.title}</h4>
      <p>{idea.body}</p>
    </div>
  )

export default Idea