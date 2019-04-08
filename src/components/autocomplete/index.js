import React from 'react';

const Autocomplete = () => (
  <div className="control control--has-icon-left">
    <i className="control__icon fas fa-film" />
    <input
      className="input"
      id="movies-autocomplete"
      type="search"
      autoComplete="off"
      name="q"
      value=""
      placeholder="any text phrase to search"
      aria-label="Search through app content"
    />
    <div className="menu">
      <div className="item">
        <span className="title">First entry</span>
        <span className="meta">Some helper meta text</span>
      </div>
    </div>
  </div>
);

export default Autocomplete;