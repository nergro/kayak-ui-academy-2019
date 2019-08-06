import React from 'react';

const button = ({ onClick, children }) => {
  return (
    <button className="custom-button" type="button" onClick={onClick}>
      {children}
    </button>
  );
};

export default button;
