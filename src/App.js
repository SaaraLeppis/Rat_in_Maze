import React, { Component } from 'react';
import './index.css';
import Maze from './components/Maze';
import Header from './components/Header';
import Footer from './components/Footer';


class App extends Component {



  render() {
    return (
      <div className="App">
        <Header />
        <Maze />
        <Footer />

      </div>
    );
  }
}

export default App;
