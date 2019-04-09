import { hot } from 'react-hot-loader/root';

import React, { Component } from 'react';

import HeaderWrapper from '../header-wrapper';
import MovieCardWrapper from '../movie-card-wrapper';

import Autocomplete from '../autocomplete';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';
import Footer from '../footer';

import styles from './app.scss';
import '../../client/movies/index.scss';

class App extends Component {
  constructor() {
    super();
    this.state = {
      selectedMovie: null
    };
  }

  handleSelect = movie => {
    this.setState({
      selectedMovie: movie
    });
  };

  render() {
    const { selectedMovie } = this.state;
    return (
      <div className={styles.container}>
        <HeaderWrapper>
          <Autocomplete handleSelect={this.handleSelect} />
        </HeaderWrapper>
        <div className="page-content container">
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default hot(App);
