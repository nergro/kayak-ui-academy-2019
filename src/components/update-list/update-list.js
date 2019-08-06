/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import ListForm from '../list-form';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';

let LIST_ID = '';
class UpdateList extends Component {
  componentDidMount() {
    const { match, fetchList } = this.props;
    LIST_ID = match.params.id;
    fetchList(LIST_ID, 1);
  }

  render() {
    const { loading, error, listUpdated, title, description, updateList } = this.props;
    const redirectUrl = '/list/' + LIST_ID + '/1';
    return (
      <div className="create-list">
        <h1>Update List</h1>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error>Sorry! Something went wrong :(</Error>
        ) : listUpdated ? (
          <Redirect to={redirectUrl} />
        ) : (
          <ListForm
            title={title}
            description={description}
            updateList={updateList}
            listId={LIST_ID}
          />
        )}
      </div>
    );
  }
}

UpdateList.propTypes = {
  match: Proptypes.object.isRequired,
  fetchList: Proptypes.func.isRequired,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.bool.isRequired,
  listUpdated: Proptypes.bool.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  updateList: Proptypes.func.isRequired
};

export default withRouter(UpdateList);
