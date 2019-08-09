import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Button from '../UI/button';

const Navbar = ({ getReqToken, logoutUser, accessToken }) => {
  const onLogin = () => {
    getReqToken();
  };
  const onLogout = () => {
    logoutUser();
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <div className="navbar__item">
          <Link to="/">Home</Link>
        </div>
        {accessToken ? (
          <div className="navbar__item">
            <Link to="/lists">Lists</Link>
          </div>
        ) : null}
      </div>
      <div className="navbar__right">
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
  accessToken: PropTypes.string.isRequired
};

export default withRouter(Navbar);
