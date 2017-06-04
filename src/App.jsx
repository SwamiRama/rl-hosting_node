import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import './App.css';

import Navbar from './components/NavBar/index.jsx';

import TicTacToe from './scenes/TicTacToe/components/Game/index.jsx';
import Home from './scenes/Home/index.js'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar/>
          <Routing/>
        </div>
      </Router>
    );
  }
}

const Routing = () => (
  <main>
    <Route exact path='/' component={Home}/>
    <Route path='/games/tictactoe' component={TicTacToe}/>
  </main>
)

export default App;
