import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';

import ListsWrapper from '../lists-wrapper';

// eslint-disable-next-line react/prefer-stateless-function
class Lists extends Component {
  componentDidMount() {
    const { fetchLists } = this.props;
    fetchLists(1);
  }
  render() {
    const { lists, pages, loading } = this.props;
    return (
      <div className="lists-container">
        <h1 className="lists-container__title">LISTS</h1>
        <ListsWrapper lists={lists} pages={pages} loading={loading} />
      </div>
    );
  }
}

Lists.propTypes = {
  fetchLists: Proptypes.func.isRequired,
  lists: Proptypes.array.isRequired,
  pages: Proptypes.string.isRequired,
  loading: Proptypes.bool.isRequired
};

export default withRouter(Lists);
