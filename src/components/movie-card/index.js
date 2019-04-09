import React from 'react';
import PropTypes from 'prop-types';

const imagePath = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ selectedMovie }) => (
  <div>
    <div className="mb-30">
      <h3>Selected Movie</h3>
    </div>
    <article className="card mb-30">
      <div className="card__header">
        <div className="asset-meta">{selectedMovie.vote_average}</div>
        <h2 className="asset-title">{selectedMovie.title}</h2>
      </div>
      <div className="card__body">
        <div className="asset-meta">{selectedMovie.release_date}</div>
        <div className="asset-meta">{selectedMovie.original_title}</div>
        <div className="asset-meta">{selectedMovie.original_language}</div>
        <div className="asset-description">{selectedMovie.overview}</div>
        <button type="button" className="button mt-30">
          Add to list
        </button>
      </div>
      <div className="card__thumbnail">
        <img
          className="asset-poster"
          src={`${imagePath}${selectedMovie.poster_path}`}
          alt={selectedMovie.original_title}
        />
      </div>
    </article>
  </div>
);

MovieCard.propTypes = {
  selectedMovie: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired
};

export default MovieCard;
