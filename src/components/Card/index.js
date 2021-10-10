import React from 'react';
import './style.css';

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            {props.name} <a target="_blank" rel="noopener noreferrer" href={props.link}><i className="fab fa-github"></i></a>
          </li>
          <li>
            {props.description}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
