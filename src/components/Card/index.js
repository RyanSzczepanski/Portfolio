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
            {props.name} <a href={props.link}><i class="fab fa-github"></i></a>
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
