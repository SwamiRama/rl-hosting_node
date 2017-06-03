import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import './App.css';

import Navbar from './components/NavBar/index.jsx';
import TicTacToe from './scenes/TicTacToe/components/Game/index.jsx';
import Home from './scenes/Home/index.js'

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Routing />
      </div>
    );
  }
}

const Routing = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/games/tictactoe' component={TicTacToe}/>
    </Switch>
  </main>
)

export default App;
