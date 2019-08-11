import React from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';

const List = ({ title, itemCount, rating, id, history: { push } }) => {
  const count = itemCount === 1 ? `${itemCount} item` : `${itemCount} items`;
  const handleClick = () => {
    push(`/list/${id}/1`);
  };
  return (
    <div className="list-box" onClick={handleClick}>
      <div className="list-box__property list-box__title">{title}</div>
      <div className="list-box__property list-box__items-count">{count}</div>
      <div className="list-box__property list-box__updated">
        Average rating:&nbsp;
        {rating}
      </div>
    </div>
  );
};

List.propTypes = {
  title: Proptypes.string.isRequired,
  itemCount: Proptypes.number.isRequired,
  rating: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
  history: Proptypes.shape({
    push: Proptypes.func.isRequired
  }).isRequired
};

export default withRouter(List);
