import React from 'react';
import Proptypes from 'prop-types';

const Error = ({ children }) => (
  <h1 className="error-message" style={{ margin: '3rem auto' }}>
    {children}
  </h1>
);

Error.propTypes = {
  children: Proptypes.string.isRequired
};

export default Error;
