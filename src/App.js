import logo from './logo.svg';
import './App.css';
//Components
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar/index.js';
import Card from './components/Card/index.js'
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
      {Projects.map(({name, image, link})=>{
        return <Card name={name} image={image} link={link}/>
      })}
    </div>
  </div>
  );
}

export default App;
