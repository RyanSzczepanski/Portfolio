import React from 'react';
import './style.css';

function AboutMe(props) {
  return (
    <div className="aboutme">
        <h1 className="header">About Me</h1>
        <img className="img" src={props.image}/>
        <p className="body">{props.body}</p>
    </div>
  );
}

export default AboutMe;
