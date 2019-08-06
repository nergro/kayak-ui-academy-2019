/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';

import Movie from './movie-box';
import Paginator from './paginator/paginator';
import Spinner from '../UI/Spinner/Spinner';
import { imagePath } from '../../services/movieDB';
import Error from '../UI/error';
import Settings from './list-settings';

let CURRENT_PAGE = '';
let CURRENT_URL = '';
let LIST_ID = '';
// let LIST_DATA = {};
// eslint-disable-next-line react/prefer-stateless-function
class List extends Component {
  render() {
    const { list, loading, error, match } = this.props;
    LIST_ID = match.params.id;
    CURRENT_PAGE = match.params.page;
    CURRENT_URL = '/list/' + LIST_ID;

    let runtime = '';
    let revenue = '';
    if (list.runtime) {
      const runtimeHours = Math.floor(list.runtime / 60);
      const runtimeMinutes = list.runtime - runtimeHours * 60;
      runtime = runtimeHours + 'H ' + runtimeMinutes + 'M';

      const billion = 1000000000;
      const million = 1000000;
      const thousand = 1000;
      const rev = list.revenue;
      if (rev > billion) {
        revenue = Math.floor(rev / billion) + 'B';
      } else if (rev > million) {
        revenue = Math.floor(rev / million) + 'M';
      } else if (rev > thousand) {
        revenue = Math.floor(rev / thousand) + 'K';
      } else {
        revenue = rev;
      }
    }
    console.log();

    return (
      <React.Fragment>
        {loading ? (
          <Spinner />
        ) : list.items ? (
          <div className="list">
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
            <Settings listId={LIST_ID} />
            <div className="list-movies">
              <Paginator
                // pages={listData.totalPages}
                // currentPage={CURRENT_PAGE}
                currentUrl={CURRENT_URL}
                movies={list.movies}
              />
              <Paginator
                pages={list.totalPages}
                currentPage={CURRENT_PAGE}
                currentUrl={CURRENT_URL}
              />
            </div>
          </div>
        ) : error ? (
          <Error>Sorry! Something went wrong :(</Error>
        ) : (
          <div className="list">
            <div className="list-title">
              <h1>{list.name}</h1>
              <p>{list.description}</p>
            </div>
            <Settings empty listId={LIST_ID} />
            <Error>List is empty</Error>
          </div>
        )}
      </React.Fragment>
    );
  }
}

List.propTypes = {
  match: Proptypes.object.isRequired
  // loading: Proptypes.bool.isRequired,
  // error: Proptypes.bool.isRequired
};

export default withRouter(List);
