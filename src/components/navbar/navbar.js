import React, { Component } from 'react';
import storageClient from '../../services/local-storage-client';

class Navbar extends Component {
  componentDidMount() {
    this.props.checkUser();
  }
  onLogin = () => {
    this.props.getReqToken();
  };
  onLogout = () => {
    this.props.logoutUser();
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
          {this.props.access_token ? (
            <div className="navbar__item navbar__item--login">
              <button onClick={this.onLogout}>Logout</button>
            </div>
          ) : (
            <div className="navbar__item navbar__item--login">
              <button onClick={this.onLogin}>Login</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Navbar;
