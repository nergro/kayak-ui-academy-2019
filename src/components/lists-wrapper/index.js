import React from 'react';
import Proptypes from 'prop-types';

import List from './list-box/list-box';
import Spinner from '../UI/Spinner/Spinner';

const listsWrapper = ({ lists, loading }) => {
  return (
    <div className="lists-wrapper">
      {loading ? (
        <Spinner />
      ) : (
        lists.map(list => (
          <List
            key={list.id}
            id={list.id}
            title={list.name}
            itemCount={list.number_of_items}
            rating={list.average_rating.toFixed(2)}
          />
        ))
      )}
    </div>
  );
};

listsWrapper.propTypes = {
  lists: Proptypes.array.isRequired,
  loading: Proptypes.bool.isRequired
};

export default listsWrapper;
