import React from "react";
import "./style.css";
import Card from "../Card/index.js";

function Work(props) {
  return (
    <div>
      <div id="portfolio" className="section-header"></div>
      <div className="flex-row">
        <div className="section-title">
          <h1>Works</h1>
        </div>
        <div className="section-content">
          {props.work.map(({ name, description, image, link, github}) => {
            return <Card name={name} description={description} image={image} link={link} github={github} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Work;
