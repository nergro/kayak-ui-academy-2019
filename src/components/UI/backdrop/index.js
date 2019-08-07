import React from 'react';

const backdrop = ({ show, clicked }) =>
  show ? <div className="Backdrop" onClick={clicked} /> : null;

export default backdrop;
