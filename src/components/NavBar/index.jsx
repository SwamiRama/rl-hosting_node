import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom';

// create classes
class NavBar extends Component {
  render() {
    const links = [
      {
        name: "Home",
        path: "/"
      }, {
        name: "TicTacToe",
        path: "/games/tictactoe"
      }
    ];

    const listItems = links.map((link) => 
      <li key={link.path} className={this.props.location.pathname === link.path ? "active" : ""}>
        <NavLink to={link.path}>{link.name}</NavLink>
      </li>);

    return (
      <nav className="navbar navbar-default">
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
          <a className="navbar-brand" href="/">RL-Hosting</a>
        </div>

        <div className="collapse navbar-collapse navbar-ex1-collapse">
          <ul className="nav navbar-nav">
            {listItems}
          </ul>
        </div>
      </nav>
    );
  }
}
NavBar = withRouter(NavBar)

export default NavBar;
