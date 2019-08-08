import React from 'react';

import PropTypes from 'prop-types';

const HeaderWrapper = ({ children }) => (
  <header className="page-header">
    <div className="container">
      <div className="content-wrapper">
        <div className="search">
          <div className="search pt-60 pb-15">
            <h1 className="text-centered pb-15">Kayak UI Academy 2019</h1>
            <div className="autocomplete field max-width-600 block-centered">{children}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
);

export default HeaderWrapper;

HeaderWrapper.propTypes = {
  children: PropTypes.node.isRequired
};
