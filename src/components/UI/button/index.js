import React from 'react';
import Proptypes from 'prop-types';

const button = ({ onClick, children }) => (
  <button className="custom-button" type="button" onClick={onClick}>
    {children}
  </button>
);

button.propTypes = {
  onClick: Proptypes.func.isRequired
};

export default button;
