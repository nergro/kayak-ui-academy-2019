/* eslint-disable no-nested-ternary */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';

import Movie from './movie-box';
import Paginator from '../UI/paginator/paginator';
import Spinner from '../UI/Spinner/Spinner';
import { imagePath } from '../../services/movieDB';

let CURRENT_PAGE = '';
let CURRENT_URL = '';
// eslint-disable-next-line react/prefer-stateless-function
class List extends Component {
  componentDidMount() {
    const { match, fetchList } = this.props;
    const listId = match.params.id;
    CURRENT_PAGE = match.params.page;
    fetchList(listId, CURRENT_PAGE);
    CURRENT_URL = '/list/' + listId;
  }
  render() {
    const { listData, loading } = this.props;
    let runtime = '';
    let revenue = '';

    if (listData.runtime) {
      const runtimeHours = Math.floor(listData.runtime / 60);
      const runtimeMinutes = listData.runtime - runtimeHours * 60;
      runtime = runtimeHours + 'H ' + runtimeMinutes + 'M';

      const billion = 1000000000;
      const million = 1000000;
      const thousand = 1000;
      const rev = listData.revenue;
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
    return (
      <React.Fragment>
        {loading ? (
          <Spinner />
        ) : listData.items ? (
          <div className="list">
            <div className="list-title">
              <h1>{listData.name}</h1>
              <p>{listData.description}</p>
            </div>
            <div className="list-info">
              <div className="list-info__item list-info__items-count">
                <h2>{listData.items}</h2>
                <p>{listData.items === 1 ? 'ITEM ON THIS LIST' : 'ITEMS ON THIS LIST'}</p>
              </div>
              <div className="list-info__item list-info__rating">
                <h2>{listData.rating.toFixed(2)}</h2>
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
            <div className="list-movies">
              <Paginator
                pages={listData.totalPages}
                currentPage={CURRENT_PAGE}
                currentUrl={CURRENT_URL}
              />
              <div className="list-movies__movies">
                {listData.movies.map(movie => (
                  <Movie key={movie.id} image={imagePath + movie.poster_path} />
                ))}
              </div>
              <Paginator
                pages={listData.totalPages}
                currentPage={CURRENT_PAGE}
                currentUrl={CURRENT_URL}
              />
            </div>
          </div>
        ) : (
          <h1>Sorry! Something went wrong :(</h1>
        )}
      </React.Fragment>
    );
  }
}

List.propTypes = {
  fetchList: Proptypes.func.isRequired,
  listData: Proptypes.object.isRequired,
  match: Proptypes.object.isRequired,
  loading: Proptypes.bool.isRequired
};

export default withRouter(List);
