import React, {Component} from 'react';

// create classes
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-default" role="navigation">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle"
            data-toggle="collapse"
            data-target=".navbar-ex1-collapse">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Title</a>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            <li className="active">
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/games/tictactoe">TacTacToe</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default NavBar;
