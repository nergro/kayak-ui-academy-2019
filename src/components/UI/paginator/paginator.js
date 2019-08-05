import React from 'react';

const paginator = () => {
  return (
    <div className="paginator">
      <ul className="paginator-list">
        <li className="paginator-list__item paginator-list__item--first">FIRST</li>
        <li className="paginator-list__item">1</li>
        <li className="paginator-list__item active">2</li>
        <li className="paginator-list__item">3</li>
        <li className="paginator-list__item paginator-list__item--last">LAST</li>
      </ul>
    </div>
  );
};

export default paginator;
