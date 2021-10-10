import React from 'react';
import './style.css';

function NavBar(props) {
  return (
    <nav className="navbar">
        <a className="left" href="/">Ryan Szczepanski</a>
        <a href="#about">About me</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
        <a href="#resume">Resume</a>
    </nav>
  );
}

export default NavBar;
