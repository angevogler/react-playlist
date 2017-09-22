import React, { Component } from 'react';

import NavBarItem from './NavBarItem';

class NavBar extends Component {
  constructor(props) {
  super(props);

  this.state = {
    menuActive: false,
  }
}

toggleMenu() {
  this.setState({
    menuActive: !this.state.menuActive
  });
  console.log(this.state.menuActive);
}

  render() {
    let menuItems;

    if (this.state.menuActive) {
      return (
        menuItems =
        <div>
          <NavBarItem name="View Account"/>
          <NavBarItem name="Log Out"/>
        </div>
      )
    }

    return(
      <header className="main-nav">
        <a>Home</a>
        <a>Library</a>
        <a>Discover</a>
        <a onClick={() => this.toggleMenu()}>Account</a>
          <ul>
            {menuItems}
          </ul>
      </header>
    );
  };
};

export default NavBar;
