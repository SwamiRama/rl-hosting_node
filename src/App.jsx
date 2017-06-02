import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'

import logo from './logo.svg';
import './App.css';

import Navbar from './components/NavBar/index.jsx';
import TicTacToe from './scenes/TicTacToe/components/Game/index.jsx';

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

const Home = () => (<div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to RL-Hosting</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>)

const Routing = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/games/tictactoe' component={TicTacToe}/>
    </Switch>
  </main>
)

export default App;
