/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import { Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import ListForm from '../list-form';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';

const createList = ({ loading, error, makeList }) => {
  return (
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
};

createList.propTypes = {
  loading: Proptypes.bool.isRequired,
  error: Proptypes.bool.isRequired,
  makeList: Proptypes.func.isRequired
};

export default createList;
