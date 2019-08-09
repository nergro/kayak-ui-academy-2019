/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import Spinner from '../UI/Spinner';
import Error from '../UI/error';

class ClearList extends Component {
  componentDidMount() {
    const {
      clearList,
      deleteList,
      match,
      history: { push }
    } = this.props;
    const listId = match.params.id;
    const url = match.url.split('/');
    if (url.includes('clear')) {
      clearList(listId).then(() => {
        push(`/list/${listId}/1`);
      });
    }
    if (url.includes('delete')) {
      deleteList(listId).then(() => {
        push('/lists');
      });
    }
  }
  render() {
    const { loading } = this.props;
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
  loading: Proptypes.bool.isRequired,
  history: Proptypes.shape({
    push: Proptypes.func.isRequired
  }).isRequired
};

ClearList.defaultProps = {
  clearList: null,
  deleteList: null
};

export default withRouter(ClearList);
