import React from 'react';
import Proptypes from 'prop-types';

const list = ({ title, itemCount, updated }) => {
  const count = itemCount == 1 ? itemCount + ' item' : itemCount + ' items';
  return (
    <div className="list-box">
      <div className="list-box__property list-box__title">{title}</div>
      <div className="list-box__property list-box__items-count">{count}</div>
      <div className="list-box__property list-box__updated">Updated {updated} ago</div>
    </div>
  );
};

list.prototypes = {
  title: Proptypes.string.isRequired,
  itemCount: Proptypes.number.isRequired,
  updated: Proptypes.string.isRequired
};

export default list;
