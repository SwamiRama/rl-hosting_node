import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import Game from './scenes/TicTacToe/components/Game/index.jsx';


// render NavBar
ReactDOM.render(<Game />, document.getElementById('tictactoe'));

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
