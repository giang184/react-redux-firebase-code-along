import React from 'react'

function ProjectDetails(props) {
  const id=props.match.params.id;
  return (
    <div className="contain section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>lorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit ametlorem ipsum dolor sit amet</p>
        </div>
      </div>

      <div className="card-action gret lighten-4 grey-text">
        <div>Posted by Andrew Giang</div>
        <div>September 22</div>
      </div>
    </div>
  )
}

export default ProjectDetails

