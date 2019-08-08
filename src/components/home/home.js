import React from 'react';
import PropTypes from 'prop-types';

import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';

const index = props => {
  const { selectedMovie } = props;
  console.log(selectedMovie);
  return (
    <div className="home">
      {selectedMovie ? (
        <MovieCardWrapper>
          <MovieCard selectedMovie={selectedMovie} />
        </MovieCardWrapper>
      ) : null}
      <FavouriteMovies selectedMovie={selectedMovie ? true : false} />
    </div>
  );
};

index.prototypes = {
  selectedMovie: PropTypes.object.isRequired
};

export default index;
