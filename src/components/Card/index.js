import React, {useState} from "react";
import "./style.css";



function Card(props) {
  let divStyle = {
    backgroundImage: 'url(' + props.image + ')',
  };

  return (
    
    <div className='card' >
      <div className='img-container' style={divStyle}>
        <image className="img" src={props.image}/>
        <div className="card-info">
          <h1><a className="nostyle" target="_blank" rel="noopener noreferrer" href={props.link}>{props.name}</a> <a className="nostyle" target="_blank" rel="noopener noreferrer" href={props.link}><i className="fab fa-github"></i></a></h1> 
          <p>{props.description}</p>
        </div>
      </div>
    </div>

    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         {props.name} <a target="_blank" rel="noopener noreferrer" href={props.link}><i className="fab fa-github"></i></a>
    //       </li>
    //       <li>
    //         {props.description}
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
}

export default Card;
