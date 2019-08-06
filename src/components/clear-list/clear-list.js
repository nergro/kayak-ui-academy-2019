/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';

let LIST_ID = '';
class ClearList extends Component {
  componentDidMount() {
    const { clearList, match } = this.props;
    LIST_ID = match.params.id;
    clearList(LIST_ID);
  }
  render() {
    const { loading, error, listCleared } = this.props;
    const redirectUrl = '/list/' + LIST_ID + '/1';
    return (
      <React.Fragment>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error>Sorry! Something went wrong:(</Error>
        ) : listCleared && LIST_ID.length > 0 ? (
          <Redirect to={redirectUrl} />
        ) : null}
      </React.Fragment>
    );
  }
}

ClearList.propTypes = {
  clearList: Proptypes.func.isRequired,
  match: Proptypes.func.isRequired,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.bool.isRequired,
  listCleared: Proptypes.bool.isRequired
};

export default withRouter(ClearList);
