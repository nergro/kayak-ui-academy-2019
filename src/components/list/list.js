/* eslint-disable prefer-template */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import ModalForm from '../UI/modal-form';

import Paginator from './paginator/paginator';
import Spinner from '../UI/Spinner';
import Error from '../UI/error';
import Settings from './list-settings';
import ListInfo from './list-info';
import ListSortSelect from './list-sort-select';

let LIST_ID = '';
class List extends Component {
  state = {
    showModal: false,
    id: 0,
    sortBy: ''
  };

  onSortSelect = e => {
    this.setState({
      sortBy: e.target.value
    });
  };

  toggleModal = id => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      id
    }));
  };
  submitComment = comment => {
    const {
      addComment,
      history: { push },
      match
    } = this.props;
    const data = {
      media_type: 'movie',
      media_id: this.state.id,
      comment
    };
    addComment(LIST_ID, data).then(() => {
      push(`/list/${match.params.id}/1`);
      this.setState({
        showModal: false
      });
    });
  };

  onMovieRemoval = id => {
    const {
      removeMovie,
      history: { push }
    } = this.props;
    if (window.confirm('You sure want to delete this?')) {
      removeMovie(LIST_ID, id).then(() => {
        push('/list/' + LIST_ID + '/1');
      });
    }
  };
  makeCommentsObject = comments => {
    const obj = { ...comments };
    const newObj = {};
    Object.keys(obj).map(key => {
      newObj[key.split(':')[1]] = obj[key];
    });
    return newObj;
  };

  render() {
    const { list, loading, match } = this.props;
    const comments = list ? this.makeCommentsObject(list.comments) : null;
    LIST_ID = match.params.id;

    return (
      <React.Fragment>
        {loading ? (
          <Spinner />
        ) : list && list.items === 0 ? (
          <div className="list">
            <div className="list-title">
              <h1>{list.name}</h1>
              <p>{list.description}</p>
            </div>
            <Settings empty />
            <Error>List is empty</Error>
          </div>
        ) : list ? (
          <div className="list">
            <ModalForm
              show={this.state.showModal}
              onBackdropClick={this.toggleModal}
              submitComment={this.submitComment}
            />
            <div className="list-title">
              <h1>{list.name}</h1>
              <p>{list.description}</p>
            </div>
            <ListInfo list={list} />
            <div className="list-settings-wrapper">
              <Settings />
              <ListSortSelect onSortSelect={this.onSortSelect} />
            </div>
            <div className="list-movies">
              <Paginator
                movies={list.movies}
                comments={comments}
                toggleModal={this.toggleModal}
                removeMovie={this.onMovieRemoval}
                sortBy={this.state.sortBy}
              />
            </div>
          </div>
        ) : (
          <Error>Sorry! Something went wrong :(</Error>
        )}
      </React.Fragment>
    );
  }
}

List.propTypes = {
  match: Proptypes.object.isRequired,
  list: Proptypes.object,
  loading: Proptypes.bool.isRequired,
  addComment: Proptypes.func.isRequired,
  removeMovie: Proptypes.func.isRequired,
  history: Proptypes.shape({
    push: Proptypes.func.isRequired
  }).isRequired
};

List.defaultProps = {
  list: null
};

export default withRouter(List);
