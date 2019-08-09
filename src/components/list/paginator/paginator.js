import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import MovieList from './list-movies';
import getSortedList from '../get-sorted-list';

const MOVIES_PER_PAGE = 5;
const paginator = ({ movies, match, comments, toggleModal, removeMovie, sortBy }) => {
  const pages = movies ? Math.ceil(movies.length / MOVIES_PER_PAGE) : 0;
  const currentUrl = `/list/${match.params.id}`;
  const currentPage = match.params.page;
  const previousPage = +currentPage - 1;
  const nextPage = +currentPage + 1;
  let moviesArr;
  if (movies) {
    const start = currentPage * MOVIES_PER_PAGE - MOVIES_PER_PAGE;
    const end = start + MOVIES_PER_PAGE;
    const sortedMovies = getSortedList(movies, sortBy);
    moviesArr = sortedMovies.slice(start, end);
  }
  return (
    <div className="paginator">
      {pages > 1 ? (
        <ul className="paginator-list">
          {pages >= 3 ? (
            <li className="paginator-list__item paginator-list__item--first">
              <Link to={`${currentUrl}/1`}>FIRST</Link>
            </li>
          ) : null}
          {previousPage > 0 ? (
            <li className="paginator-list__item">
              <Link to={`${currentUrl}/${previousPage}`}>{previousPage}</Link>
            </li>
          ) : null}
          <li className="paginator-list__item active">
            <Link to={`${currentUrl}/${currentPage}`}>{currentPage}</Link>
          </li>
          {nextPage <= pages ? (
            <li className="paginator-list__item">
              <Link to={`${currentUrl}/${nextPage}`}>{nextPage}</Link>
            </li>
          ) : null}
          {pages >= 3 ? (
            <li className="paginator-list__item paginator-list__item--last">
              <Link to={`${currentUrl}/${pages}`}>LAST</Link>
            </li>
          ) : null}
        </ul>
      ) : null}
      <MovieList
        movies={moviesArr}
        comments={comments}
        toggleModal={toggleModal}
        removeMovie={removeMovie}
        sortBy={sortBy}
      />
    </div>
  );
};

paginator.propTypes = {
  movies: Proptypes.array.isRequired,
  match: Proptypes.object.isRequired,
  comments: Proptypes.object.isRequired,
  toggleModal: Proptypes.func.isRequired,
  removeMovie: Proptypes.func.isRequired,
  sortBy: Proptypes.string.isRequired
};

export default withRouter(paginator);
