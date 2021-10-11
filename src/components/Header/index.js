import React from 'react';
import './style.css';

function Header(props) {
  return (
    <nav className="navbar">
        <a className="left" href="#" onClick={() => props.setPageSelected("home")}>Ryan Szczepanski</a>
        <a href="#contact" onClick={() => props.setPageSelected("contact")}>Contact</a>
        <a href="#resume" onClick={() => props.setPageSelected("resume")}>Resume</a>
        <a href="#portfolio" onClick={() => props.setPageSelected("portfolio")}>Portfolio</a>
        <a href="#about" onClick={() => props.setPageSelected("about")}>About me</a>
    </nav>
  );
}

export default Header;
