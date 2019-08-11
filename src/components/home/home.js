/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';

import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';

const Home = ({ selectedMovie, isAuth, fetchedLists, addMovie }) => {
  const getMovieLists = (movieId, lists) => {
    const movieListsArr = [];
    lists.map(list => {
      list.data.movies.map(movie => {
        if (movie.id === movieId) {
          movieListsArr.push(list);
        }
      });
    });
    return movieListsArr;
  };

  let movieListsArr = [];
  let availableListsArr = [];
  if (selectedMovie && isAuth) {
    movieListsArr = getMovieLists(selectedMovie.id, fetchedLists);
    availableListsArr = fetchedLists.filter(list => !movieListsArr.includes(list));
  }
  return (
    <div className="home">
      {selectedMovie ? (
        <MovieCardWrapper>
          <MovieCard
            selectedMovie={selectedMovie}
            isAuth={isAuth}
            lists={movieListsArr}
            availableLists={availableListsArr}
            addMovie={addMovie}
          />
        </MovieCardWrapper>
      ) : null}
      <FavouriteMovies selectedMovie={selectedMovie ? true : false} />
    </div>
  );
};

Home.propTypes = {
  selectedMovie: PropTypes.object,
  isAuth: PropTypes.bool.isRequired,
  fetchedLists: PropTypes.array,
  addMovie: PropTypes.func
};

Home.defaultProps = {
  fetchedLists: null,
  addMovie: null,
  selectedMovie: null
};

export default Home;
