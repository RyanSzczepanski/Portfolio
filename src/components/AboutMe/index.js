import React from "react";
import "./style.css";

function AboutMe(props) {
  return (
    <div>
      <div id="about" className="section-header"></div>
        <div className="flex-row">
          <div className="section-title">
            <h1>About Me</h1>
          </div>
          <div className="section-content">
              <img className="img" src={props.image} />
              <p className="body">{props.body}</p>
          </div>
        </div>
    </div>
  );
}

export default AboutMe;
