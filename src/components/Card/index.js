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
            {props.name} <i class="fab fa-github" href={props.link}></i>
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
