import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Movie from '../movie-box';
import { imagePath } from '../../../services/movieDB';

const MOVIES_PER_PAGE = 5;
const paginator = ({ currentUrl, movies, match }) => {
  const pages = movies ? Math.ceil(movies.length / MOVIES_PER_PAGE) : 0;
  const currentPage = match.params.page;
  const previousPage = +currentPage - 1;
  const nextPage = +currentPage + 1;
  let moviesArr;
  if (movies) {
    const start = currentPage * MOVIES_PER_PAGE - MOVIES_PER_PAGE;
    const end = start + MOVIES_PER_PAGE;
    moviesArr = movies.slice(start, end);
  }
  return (
    <div className="paginator">
      {pages > 1 ? (
        <ul className="paginator-list">
          {pages >= 3 ? (
            <li className="paginator-list__item paginator-list__item--first">
              <Link to={currentUrl + '/1'}>FIRST</Link>
            </li>
          ) : null}
          {previousPage > 0 ? (
            <li className="paginator-list__item">
              <Link to={currentUrl + '/' + previousPage}>{previousPage}</Link>
            </li>
          ) : null}
          <li className="paginator-list__item active">
            <Link to={currentUrl + '/' + currentPage}>{currentPage}</Link>
          </li>
          {nextPage <= pages ? (
            <li className="paginator-list__item">
              <Link to={currentUrl + '/' + nextPage}>{nextPage}</Link>
            </li>
          ) : null}
          {pages >= 3 ? (
            <li className="paginator-list__item paginator-list__item--last">
              <Link to={currentUrl + '/' + pages}>LAST</Link>
            </li>
          ) : null}
        </ul>
      ) : null}

      <div className="list-movies__movies">
        {moviesArr
          ? moviesArr.map(movie => <Movie key={movie.id} image={imagePath + movie.poster_path} />)
          : null}
      </div>
    </div>
  );
};

export default withRouter(paginator);
