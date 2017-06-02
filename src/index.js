import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { BrowserRouter, Route } from 'react-router-dom'

//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
