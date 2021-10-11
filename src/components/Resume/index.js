import React from "react";
import "./style.css";

function Resume(props) {
  return (
    <div className="resume">
      <h1>Resume</h1>
      <span>
        Downlaod my <a href="#">resume</a>
      </span>
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
  );
}

export default Resume;
