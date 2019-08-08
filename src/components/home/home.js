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

  render() {
    const { selectedMovie, isAuth, fetchedLists } = this.props;
    let movieListsArr = [];
    if (selectedMovie) {
      movieListsArr = this.getMovieLists(selectedMovie.id, fetchedLists);
    }
    return (
      <div className="home">
        {selectedMovie ? (
          <MovieCardWrapper>
            <MovieCard selectedMovie={selectedMovie} isAuth={isAuth} lists={movieListsArr} />
          </MovieCardWrapper>
        ) : null}
        <FavouriteMovies selectedMovie={selectedMovie ? true : false} />
      </div>
    );
  }
}

Home.propTypes = {
  selectedMovie: PropTypes.object.isRequired,
  isAuth: PropTypes.bool.isRequired,
  fetchedLists: PropTypes.array
};

Home.defaultProps = {
  fetchedLists: null
};

export default Home;
