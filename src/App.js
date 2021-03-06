import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
//Components
import Header from "./components/Header/index.js";
import Work from "./components/Works/index.js";
import AboutMe from "./components/AboutMe/index.js";
import Contact from "./components/Contact/index.js";
import Resume from "./components/Resume/index.js";
import Footer from "./components/Footer/index.js";
//Jsons
import Projects from "./jsons/projects.json";
import AboutMeJson from "./jsons/aboutme.json";

function App() {
  const [pageSelected, setPageSelected] = useState("home");
  return (
    <>
      <Header setPageSelected={setPageSelected} />
      <div className="content flex-fill">
        {pageSelected == "home" ||
        pageSelected == "about" ||
        pageSelected == "portfolio" ? (
          <>
            <AboutMe image={AboutMeJson.image} body={AboutMeJson.body} />
            <Work work={Projects} />
          </>
        ) : pageSelected == "contact" ? (
          <Contact />
        ) : (
          <Resume/>
        )}
      </div>
      <Footer/>
    </>
  );
}

export default App;
