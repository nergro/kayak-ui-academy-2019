import React from 'react';
import Proptypes from 'prop-types';

const Button = ({ onClick, children }) => (
  <button className="custom-button" type="button" onClick={onClick}>
    {children}
  </button>
);

Button.propTypes = {
  onClick: Proptypes.func.isRequired,
  children: Proptypes.string.isRequired
};

export default Button;
