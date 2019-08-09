import React from 'react';
import Proptypes from 'prop-types';

const backdrop = ({ show, clicked }) =>
  show ? <div className="Backdrop" onClick={clicked} /> : null;

backdrop.propTypes = {
  show: Proptypes.bool.isRequired,
  clicked: Proptypes.func.isRequired
};
export default backdrop;
