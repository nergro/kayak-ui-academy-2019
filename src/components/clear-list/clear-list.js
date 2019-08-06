/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';

let LIST_ID = '';
class ClearList extends Component {
  componentDidMount() {
    const { clearList, deleteList, match } = this.props;
    LIST_ID = match.params.id;
    const url = match.url.split('/');
    if (url.includes('clear')) {
      clearList(LIST_ID);
    }
    if (url.includes('delete')) {
      deleteList(LIST_ID);
    }
  }
  render() {
    const { loading, error, listCleared, listDeleted } = this.props;
    const redirectUrl = '/list/' + LIST_ID + '/1';
    return (
      <React.Fragment>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error>Sorry! Something went wrong:(</Error>
        ) : listCleared && LIST_ID.length > 0 ? (
          <Redirect to={redirectUrl} />
        ) : listDeleted && LIST_ID.length > 0 ? (
          <Redirect to="/lists" />
        ) : null}
      </React.Fragment>
    );
  }
}

ClearList.propTypes = {
  clearList: Proptypes.func,
  deleteList: Proptypes.func,
  match: Proptypes.object.isRequired,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.bool.isRequired,
  listCleared: Proptypes.bool,
  listDeleted: Proptypes.bool
};

ClearList.defaultProps = {
  clearList: null,
  deleteList: null,
  listCleared: false,
  listDeleted: false
};

export default withRouter(ClearList);
