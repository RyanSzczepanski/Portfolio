import React from "react";
import "./style.css";

function Project(props) {
  let divStyle = {
    backgroundImage: 'url(' + props.image + ')',
  };

  return (
    <div className='card' >
      <div className='img-container' style={divStyle}>
        <div className="card-info">
          <h1><a className="nostyle" target="_blank" rel="noopener noreferrer" href={props.link}>{props.name}</a> <a className="nostyle" target="_blank" rel="noopener noreferrer" href={props.github}><i className="fab fa-github"></i></a></h1> 
          <p>{props.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Project;
