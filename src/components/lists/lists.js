import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Proptypes from 'prop-types';

import ListsWrapper from '../lists-wrapper';

// eslint-disable-next-line react/prefer-stateless-function
class Lists extends Component {
  render() {
    const { lists, loading, error } = this.props;
    console.log(lists);
    return (
      <div className="lists-container">
        <h1 className="lists-container__title">LISTS</h1>
        <Link to="/list/create" className="custom-button" style={{ textDecoration: 'none' }}>
          Create New
        </Link>
        <ListsWrapper lists={lists} loading={loading} error={error} />
      </div>
    );
  }
}

Lists.propTypes = {
  lists: Proptypes.array.isRequired,
  loading: Proptypes.bool.isRequired,
  error: Proptypes.bool.isRequired
};

export default withRouter(Lists);
