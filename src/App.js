import logo from './logo.svg';
import './App.css';
//Components
import NavBar from './components/NavBar/index.js';
import Work from './components/Work/index.js'
import AboutMe from './components/AboutMe/index.js'
//Jsons
import Projects from './jsons/projects.json'
import AboutMeJson from './jsons/aboutme.json'

function App() {
  return (
  <div>
    <NavBar/>
    <div className="content">
      <AboutMe image={AboutMeJson.image} body={AboutMeJson.body}/>
      <Work work={Projects}/>
    </div>
  </div>
  );
}

export default App;
