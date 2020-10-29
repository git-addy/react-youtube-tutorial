import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'

function App() {
  return (
    <div className="App">
      <Greet name="BruceY" heroname="Batman">
        <p>This is going to the children Element.</p>
      </Greet>
      <Greet name="Clark" heroname="Superman">
        <button>Click</button>
      </Greet>
      
      <Welcome name="BruceY" heroname="Batman"></Welcome>
      <Welcome name="Clark" heroname="Batman"></Welcome>
      <Hello />
    </div>
  );
}

export default App;
