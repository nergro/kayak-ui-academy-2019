import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { toggleFavorite as toggleFavoriteAction } from '../../actions/favorites';

const imagePath = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ selectedMovie, toggleFavorite, isFavorite }) => (
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
        <button
          type="button"
          className="button mt-30"
          onClick={() => toggleFavorite(selectedMovie)}
        >
          {isFavorite ? 'Remove from favorites!' : 'Add to favorites!'}
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
  selectedMovie: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  toggleFavorite: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const isFavorite = !!state.favorites.movies.find(movie => movie.id === ownProps.selectedMovie.id);

  return {
    isFavorite
  };
};

const mapDispatchToProps = {
  toggleFavorite: toggleFavoriteAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
