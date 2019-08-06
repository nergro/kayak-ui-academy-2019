import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../UI/button';

const Navbar = ({ getReqToken, logoutUser, accessToken, history }) => {
  const onLogin = () => {
    getReqToken();
  };
  const onLogout = () => {
    logoutUser();
    history.push('/');
  };

  return (
    <div className="navbar">
      <div className="navbar-left">
        <div className="navbar__item">
          <a href="/">Home</a>
        </div>
        {accessToken ? (
          <div className="navbar__item">
            <a href="/lists">Lists</a>
          </div>
        ) : null}
      </div>
      <div className="navbar-right">
        {accessToken ? (
          <div className="navbar__item navbar__item--login">
            <Button onClick={onLogout}>Logout</Button>
          </div>
        ) : (
          <div className="navbar__item navbar__item--login">
            <Button onClick={onLogin}>Login</Button>
          </div>
        )}
      </div>
    </div>
  );
};

Navbar.propTypes = {
  getReqToken: PropTypes.func.isRequired,
  logoutUser: PropTypes.func.isRequired,
  accessToken: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired
};

export default withRouter(Navbar);
