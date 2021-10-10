import {useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Card from './components/Card/index.js'
import Projects from './projects.json'

function App() {

  const [projectList, setProjectList] = useState(Projects);

  return (
    
    //Returns all projects from projects.json
    projectList.map(({name, image, link})=>{
      return <Card name={name} image={image} link={link}/>
    })
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
