/* eslint-disable react/jsx-indent */
/* eslint-disable no-nested-ternary */
import React from 'react';
import Proptypes from 'prop-types';
import Movie from '../../movie-box';

const ListMovies = ({ movies, comments, toggleModal, removeMovie }) => {
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

ListMovies.propTypes = {
  movies: Proptypes.array,
  comments: Proptypes.object,
  toggleModal: Proptypes.func.isRequired,
  removeMovie: Proptypes.func.isRequired
};

ListMovies.defaultProps = {
  movies: [],
  comments: {}
};

export default ListMovies;
