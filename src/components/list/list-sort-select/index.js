import React from 'react';
import Proptypes from 'prop-types';

const ListSortSelect = ({ onSortSelect }) => (
  <div className="list-sorting">
    <select
      className="button"
      name="list"
      value="default"
      onChange={onSortSelect}
      style={{ height: '4rem', borderRadius: '5px' }}
    >
      <option value="default" disabled>
        Sort By
      </option>
      <option value="DATE_ASC">Release Date Asc</option>
      <option value="DATE_DESC">Release Date Desc</option>
      <option value="RATING_ASC">Rating Asc</option>
      <option value="RATING_DESC">Rating Desc</option>
      <option value="TITLE_DESC">Title Desc</option>
    </select>
  </div>
);
ListSortSelect.propTypes = {
  onSortSelect: Proptypes.func.isRequired
};

export default ListSortSelect;
