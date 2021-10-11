import React from 'react';
import './style.css';

function NavBar(props) {
  return (
    <nav className="navbar">
        <a className="left" href="#">Ryan Szczepanski</a>
        <a href="#resume">Resume</a>
        <a href="#contact" onClick={() => props.setContactSelected(true)}>Contact</a>
        <a href="#about">About me</a>
    </nav>
  );
}

export default NavBar;
