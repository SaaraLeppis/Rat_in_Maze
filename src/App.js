import React, { Component } from 'react';
import './index.css';
import Maze from './components/Maze';

const createMaze = (nro) => {
  return NaN;
}

class App extends Component {

  state = {
    free: 1,
    maze_length: 4,
  }



  render() {
    return (
      <div className="App">
        <p>Hello</p>
        <Maze />

      </div>
    );
  }
}

export default App;
