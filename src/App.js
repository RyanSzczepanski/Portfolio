import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import NavBar from './components/NavBar/index.js';
import Card from './components/Card/index.js'
import Projects from './projects.json'

function App() {

  const [projectList, setProjectList] = useState(Projects);

  return (
    <div>
        <NavBar/>
    {projectList.map(({name, image, link})=>{
      return <Card name={name} image={image} link={link}/>
    })}
  </div>
  );
}

export default App;
