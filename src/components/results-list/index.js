import React from 'react';
import Proptypes from 'prop-types';
import GenresList from '../genres-list';

const ResultsList = ({ isMoviesLoading, results, handleSelect, clearMovies, genres }) => {
  return isMoviesLoading ? (
    <div>Loading...</div>
  ) : (
    results.map(movie => (
      <div
        key={movie.id}
        className={`item ${movie.favorite ? 'favoriteItem' : ''}`}
        onClick={() => {
          handleSelect(movie);
          clearMovies();
        }}
      >
        <span className="title">{`${movie.original_title} (${movie.release_date})`}</span>
        <span className="meta">
          <GenresList ids={movie.genre_ids} genres={genres} />
        </span>
      </div>
    ))
  );
};

ResultsList.propTypes = {
  isMoviesLoading: Proptypes.bool.isRequired,
  results: Proptypes.array.isRequired,
  handleSelect: Proptypes.func.isRequired,
  clearMovies: Proptypes.func.isRequired,
  genres: Proptypes.array.isRequired
};
export default ResultsList;
