import React, { Component } from 'react';

class NavBarItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
    }
  }

  toggleHover(event) {
    this.setState({
      hover: !this.state.hover,
    });
  }

  handleClick() {
    console.log(this.props.name + ' was selected')
  }

  render() {
    let linkStyle;

    if (this.state.hover) {
      linkStyle = {color: 'blue'}
    } else {
      linkStyle = {color: 'black'}
    }

    return (
      <li style={linkStyle}
        onMouseOver={(event) => this.toggleHover(event)}
        onMouseOut={(event) => this.toggleHover(event)}
        onClick={() => this.handleClick()}>{this.props.name}</li>
    )
  }
}

export default NavBarItem;
