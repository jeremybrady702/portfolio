import React, { useState } from 'react';
import { render } from "react-dom";
import lasVegas from './img/vegas.jpg';
import './css/index.css';

class App extends React.Component {
  render() {
    return (
      <div className="App-container">
        <header className="App-header">
       
        
    
        </header>
        <div className="name-card-container">
          {/* <img src={lasVegas} className="las-vegas" alt="photo of las vegas" /> */}
          <h2 className="h2-fname">Jeremy</h2><h2 className="h2-lname">Brady</h2>
          <h3>Full Stack Web Developer</h3>
          <h3>& Software Engineer</h3>
        </div>
      
      </div>
    );
  }
}

export default App;
