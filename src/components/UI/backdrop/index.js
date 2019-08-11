import React from 'react';
import Proptypes from 'prop-types';

const Backdrop = ({ show, clicked }) =>
  show ? <div className="Backdrop" onClick={clicked} /> : null;

Backdrop.propTypes = {
  show: Proptypes.bool.isRequired,
  clicked: Proptypes.func.isRequired
};
export default Backdrop;
