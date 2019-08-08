/* eslint-disable prefer-template */
/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import ModalForm from '../UI/modal-form';

import Paginator from './paginator/paginator';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';
import Settings from './list-settings';

let CURRENT_PAGE = '';
let CURRENT_URL = '';
let LIST_ID = '';
class List extends Component {
  state = {
    showModal: false,
    mediaType: '',
    id: 0,
    comment: ''
  };

  toggleModal = (mediaType, id) => {
    this.setState(() => ({
      showModal: !this.state.showModal,
      mediaType,
      id
    }));
  };
  submitComment = comment => {
    const { addComment, history } = this.props;
    const data = {
      media_type: this.state.mediaType,
      media_id: this.state.id,
      comment
    };
    addComment(LIST_ID, data).then(res => {
      history.push(CURRENT_URL + '/1');
      this.setState({
        showModal: false
      });
    });
  };

  onMovieRemoval = id => {
    const { removeMovie, history } = this.props;
    removeMovie(LIST_ID, id).then(res => {
      history.push('/list/' + LIST_ID + '/1');
    });
  };
  makeCommentsObject = comments => {
    const obj = { ...comments };
    const newObj = {};
    Object.keys(obj).map(key => {
      newObj[key.split(':')[1]] = obj[key];
    });
    return newObj;
  };
  convertRevenue = revenue => {
    const billion = 1000000000;
    const million = 1000000;
    const thousand = 1000;
    if (revenue > billion) {
      return Math.floor(revenue / billion) + 'B';
    }
    if (revenue > million) {
      return Math.floor(revenue / million) + 'M';
    }
    if (revenue > thousand) {
      return Math.floor(revenue / thousand) + 'K';
    }
    return revenue;
  };
  convertRuntime = runtime => {
    const runtimeHours = Math.floor(runtime / 60);
    const runtimeMinutes = runtime - runtimeHours * 60;
    return runtimeHours + 'H ' + runtimeMinutes + 'M';
  };
  render() {
    const { list, loading, match, removeMovie } = this.props;
    const comments = list ? this.makeCommentsObject(list.comments) : null;
    LIST_ID = match.params.id;
    CURRENT_PAGE = match.params.page;
    CURRENT_URL = '/list/' + LIST_ID;

    const runtime = list ? this.convertRuntime(list.runtime) : '';
    const revenue = list ? this.convertRevenue(list.revenue) : '';

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
            <Settings empty listId={LIST_ID} />
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
            <div className="list-info">
              <div className="list-info__item list-info__items-count">
                <h2>{list.items}</h2>
                <p>{list.items === 1 ? 'ITEM ON THIS LIST' : 'ITEMS ON THIS LIST'}</p>
              </div>
              <div className="list-info__item list-info__rating">
                <h2>{list.rating.toFixed(2)}</h2>
                <p>AVERAGE RATING</p>
              </div>
              <div className="list-info__item list-info__runtime">
                <h2>{runtime}</h2>
                <p>TOTAL RUNTIME</p>
              </div>
              <div className="list-info__item list-info__revenue">
                <h2>{'$' + revenue}</h2>
                <p>TOTAL REVENUE</p>
              </div>
            </div>
            <Settings />
            <div className="list-movies">
              <Paginator
                currentUrl={CURRENT_URL}
                movies={list.movies}
                comments={comments}
                toggleModal={this.toggleModal}
                removeMovie={this.onMovieRemoval}
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
  removeMovie: Proptypes.func.isRequired
};

List.defaultProps = {
  list: null
};

export default withRouter(List);
