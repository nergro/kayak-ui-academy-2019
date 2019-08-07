/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter, Redirect } from 'react-router-dom';
import Proptypes from 'prop-types';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';

let LIST_ID = '';
class ClearList extends Component {
  componentDidMount() {
    const { clearList, deleteList, match, history } = this.props;
    LIST_ID = match.params.id;
    const url = match.url.split('/');
    if (url.includes('clear')) {
      const redirectUrl = '/list/' + LIST_ID + '/1';
      clearList(LIST_ID).then(res => {
        history.push(redirectUrl);
      });
    }
    if (url.includes('delete')) {
      deleteList(LIST_ID).then(res => {
        history.push('/lists');
      });
    }
  }
  render() {
    const { loading } = this.props;
    const redirectUrl = '/list/' + LIST_ID + '/1';
    return (
      <React.Fragment>
        {loading ? <Spinner /> : <Error>Sorry! Something went wrong:(</Error>}
      </React.Fragment>
    );
  }
}

ClearList.propTypes = {
  clearList: Proptypes.func,
  deleteList: Proptypes.func,
  match: Proptypes.object.isRequired,
  loading: Proptypes.bool.isRequired
};

ClearList.defaultProps = {
  clearList: null,
  deleteList: null
};

export default withRouter(ClearList);
