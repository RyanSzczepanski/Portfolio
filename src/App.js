import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
//Components
import NavBar from './components/NavBar/index.js';
import Work from './components/Work/index.js'
import AboutMe from './components/AboutMe/index.js'
import Contact from './components/Contact/index.js'
//Jsons
import Projects from './jsons/projects.json'
import AboutMeJson from './jsons/aboutme.json'

function App() {
  const [contactSelected, setContactSelected] = useState(false);
  return (
  <>
    <NavBar setContactSelected={setContactSelected}/>
    <div className="content">
      {!contactSelected ? (
        <>
          <AboutMe image={AboutMeJson.image} body={AboutMeJson.body}/>
          <Work work={Projects}/>
        </>
      ) : (
        <Contact/>
      )}
    </div>
  </>
  );
}

export default App;
