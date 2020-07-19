import React, {useState} from 'react';

import backgroundImage from './assets/background.jpg'
import Header from './components/Header';
import './App.css';


function App() {
    const [projects, setProjects] = useState(['Desenvolvimento do App', 'Front End Web']);

    function handleNewProjects () {
        //projects.push(`Novo Projeto ${Date.now()}`);

        setProjects([...projects, `Novo Projeto ${Date.now()}`]);
    }

    return (
        <>
        <Header title="HomePage"/>

        

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>
        
        
        <button type='button' onClick={handleNewProjects}>Adicionar Projeto</button>


        <img src={backgroundImage} />
        
        </>
        );
}

export default App;