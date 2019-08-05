import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ getReqToken, logoutUser, accessToken }) => {
  const onLogin = () => {
    getReqToken();
  };
  const onLogout = () => {
    logoutUser();
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
            <button type="button" onClick={onLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="navbar__item navbar__item--login">
            <button type="button" onClick={onLogin}>
              Login
            </button>
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

export default Navbar;
