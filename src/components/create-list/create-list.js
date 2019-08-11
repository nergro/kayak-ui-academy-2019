/* eslint-disable no-nested-ternary */
import React from 'react';
import Proptypes from 'prop-types';
import ListForm from '../list-form';
import Spinner from '../UI/Spinner';
import Error from '../UI/error';

const CreateList = ({ loading, error, makeList }) => (
  <div className="create-list">
    <h1>Create List</h1>
    {loading ? (
      <Spinner />
    ) : error ? (
      <Error>Sorry! Something went wrong :(</Error>
    ) : (
      <ListForm makeList={makeList} />
    )}
  </div>
);

CreateList.propTypes = {
  loading: Proptypes.bool.isRequired,
  error: Proptypes.bool.isRequired,
  makeList: Proptypes.func.isRequired
};

export default CreateList;
