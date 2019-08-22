import React from 'react';
import './App.css';
import CivilizationList from './Cvilizations';

function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <CivilizationList title="Civilizations"/>
    </div>
  );
}

export default App;
