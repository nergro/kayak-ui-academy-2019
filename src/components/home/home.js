/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MovieCardWrapper from '../movie-card-wrapper';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';

class Home extends Component {
  getMovieLists = (movieId, lists) => {
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
  getFreeLists = (fetchedLists, movieLists) => {
    return fetchedLists.filter(list => {
      return !movieLists.includes(list);
    });
  };

  render() {
    const { selectedMovie, isAuth, fetchedLists, addMovie } = this.props;
    let movieListsArr = [];
    let availableListsArr = [];
    if (selectedMovie && isAuth) {
      movieListsArr = this.getMovieLists(selectedMovie.id, fetchedLists);
      availableListsArr = fetchedLists.filter(list => {
        return !movieListsArr.includes(list);
      });
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
  }
}

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
