/* eslint-disable no-nested-ternary */
import React from 'react';
import Proptypes from 'prop-types';

import List from './list-box/list-box';
import Spinner from '../UI/Spinner';
import Error from '../UI/error';

const listsWrapper = ({ lists, loading }) => (
  <div className="lists-wrapper">
    {loading ? (
      <Spinner />
    ) : lists.length > 0 ? (
      lists.map(list => (
        <List
          key={list.id}
          id={list.id}
          title={list.name}
          itemCount={list.number_of_items}
          rating={list.average_rating.toFixed(2)}
        />
      ))
    ) : lists.length === 0 ? (
      <Error>No lists created yet</Error>
    ) : (
      <Error>Sorry! Something went wrong :(</Error>
    )}
  </div>
);

listsWrapper.propTypes = {
  lists: Proptypes.array.isRequired,
  loading: Proptypes.bool.isRequired
};

export default listsWrapper;
