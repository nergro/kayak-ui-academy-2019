import React from 'react';

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

export default ResultsList;
