import React, { Component } from 'react';

class Navbar extends Component {
  componentDidMount() {
    this.props.loginUser();
  }
  onNavClick = () => {
    this.props.getReqToken();
  };
  render() {
    return (
      <div className="navbar">
        <div className="navbar-left">
          <div className="navbar__item">
            <a href="##">Home</a>
          </div>
          <div className="navbar__item">
            <a href="##">Lists</a>
          </div>
        </div>
        <div className="navbar-right">
          <div className="navbar__item navbar__item--login">
            <a href="##" onClick={this.onNavClick}>
              Login
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
