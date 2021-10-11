import React from "react";
import "./style.css";

function Resume(props) {
  return (
    <div className="resume">
        <div className="flex-row">
          <div className="section-title">
            <h1>Resume</h1>
            <a href="#">Downlaod</a>
          </div>
          <div className="section-content">
            <h2>Front-end Proficiencies</h2>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>jQuery</li>
              <li>Responsive Design</li>
              <li>React</li>
              <li>Bootstrap</li>
            </ul>
            <h2>Back-end Proficiencies</h2>
            <ul>
              <li>APIs</li>
              <li>Node</li>
              <li>Express</li>
              <li>MySQL, Sequelize</li>
              <li>MongoDB, Mongoos</li>
              <li>REST</li>
              <li>GraphQL</li>
            </ul>
          </div>
        </div>
    </div>
  );
}

export default Resume;
