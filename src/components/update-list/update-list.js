/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import ListForm from '../list-form';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';

class UpdateList extends Component {
  render() {
    const { loading, updateList, list } = this.props;
    return (
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
  }
}

UpdateList.propTypes = {
  loading: Proptypes.bool.isRequired,
  updateList: Proptypes.func.isRequired,
  list: Proptypes.object
};

UpdateList.defaultProps = {
  list: null
};

export default withRouter(UpdateList);
