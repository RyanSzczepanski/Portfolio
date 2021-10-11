import React from "react";
import "./style.css";

function Footer(props) {
  return (
<footer className="footer mt-auto py-3 bg-dark d-flex flex-column">
  <div className="d-flex justify-content-between">
    <h1/>
    <a target="_blank" rel="noopener noreferrer" href="https://github.com/RyanSzczepanski"><i class="fab fa-github"></i></a>
    <a target="_blank" rel="noopener noreferrer" href="https://linkedin.com/in/ryan-szczepanski-073a7220a/"><i class="fab fa-linkedin"></i></a>
    <h1/>
  </div>
</footer>
  );
}

export default Footer;
