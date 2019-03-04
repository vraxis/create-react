import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScratchTextBox from './form/ScratchTextBox';
import ScratchPad from './form/ScratchPad';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">       
          <ScratchPad numBoxes ="5" />
        </header>
      </div>
    );
  }
}

export default App;
