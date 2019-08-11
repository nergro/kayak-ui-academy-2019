/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Proptypes from 'prop-types';
import Movie from '../../movie-box';

const listMovies = ({ movies, comments, toggleModal, removeMovie }) => {
  console.log(movies);
  return (
    <div className="list-movies__movies">
      {movies
        ? movies.map(movie => (
            <Movie
              key={movie.id}
              movie={movie}
              comment={comments[movie.id]}
              toggleModal={toggleModal}
              removeMovie={removeMovie}
            />
          ))
        : null}
    </div>
  );
};

listMovies.propTypes = {
  movies: Proptypes.array,
  comments: Proptypes.object,
  toggleModal: Proptypes.func.isRequired,
  removeMovie: Proptypes.func.isRequired
};

listMovies.defaultProps = {
  movies: [],
  comments: {}
};

export default listMovies;
