import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/styles.css';

import NavBar from './components/NavBar.js';
import Playlist from './components/Playlist.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <NavBar />
        </div>

        <div>
          <Playlist />
        </div>
      </div>

    );
  }
}

export default App;
