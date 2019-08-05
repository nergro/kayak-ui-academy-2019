import React from 'react';
import PropTypes from 'prop-types';

import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';

const index = props => {
  const { selectedMovie } = props;
  return (
    <React.Fragment>
      <MovieCardWrapper>
        {selectedMovie ? (
          <MovieCard selectedMovie={selectedMovie} />
        ) : (
          <div className="mb-30">
            <h3>Selected Movie</h3>
          </div>
        )}
      </MovieCardWrapper>
      <FavouriteMovies />
    </React.Fragment>
  );
};

index.prototypes = {
  selectedMovie: PropTypes.object.isRequired
};

export default index;
