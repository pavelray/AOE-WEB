import React from 'react';
import {BrowserRouter as Router, NavLink, Route} from 'react-router-dom';
import './App.css';
import CivilizationContainer from './Cvilizations';
import StructureContainer from './Structures';
import UnitContainer from './Units';


function App(props) {
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <Router>
        <div className="ui pointing menu">
              <a className="item active">
              <NavLink to="/" exact strict> Civilizations </NavLink> 
            </a>
            <a className="item">
              <NavLink to="/Units" exact strict> Units </NavLink> 
            </a>
            <a className="item">
              <NavLink to="/Structures" exact strict> Structures </NavLink> 
            </a>
            <div className="right menu">
              <div className="item">
                <div className="ui transparent icon input">
                  <input type="text" placeholder="Search..." />
                  <i className="search link icon"></i>
                </div>
              </div>
            </div>
          </div>
          <Route exact strict path="/" render={()=> <CivilizationContainer title='Civilizations'/>} />
          <Route exact strict path="/Units" render={()=> <UnitContainer title='Units'/>} />
          <Route exact strict path="/Structures" render={()=> <StructureContainer title='Structures' />} />
          
      </Router>
          
        

      
     
    </div>
  );
}

export default App;