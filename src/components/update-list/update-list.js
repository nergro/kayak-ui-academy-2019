/* eslint-disable no-nested-ternary */
import React from 'react';
import Proptypes from 'prop-types';
import ListForm from '../list-form';
import Spinner from '../UI/Spinner';
import Error from '../UI/error';

const editList = ({ loading, updateList, list }) => (
  <div className="create-list">
    <h1>Update List</h1>
    {loading ? (
      <Spinner />
    ) : list ? (
      <ListForm title={list.name} description={list.description} updateList={updateList} />
    ) : (
      <Error>Sorry! Something went wrong :(</Error>
    )}
  </div>
);

editList.propTypes = {
  loading: Proptypes.bool.isRequired,
  updateList: Proptypes.func.isRequired,
  list: Proptypes.object
};

editList.defaultProps = {
  list: null
};

export default editList;
