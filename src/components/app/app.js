import { hot } from 'react-hot-loader/root';

import React from 'react';

import HeaderWrapper from '../header-wrapper';
import MovieCardWrapper from '../movie-card-wrapper';

import Autocomplete from '../autocomplete';
import MovieCard from '../movie-card';
import FavouriteMovies from '../favorite-movies';
import Footer from '../footer';

import styles from './app.scss';
import '../../client/movies/index.scss';

const App = () => (
  <div className={styles.container}>
    <HeaderWrapper>
      <Autocomplete />
    </HeaderWrapper>
    <div className="page-content container">
      <MovieCardWrapper>
        <MovieCard />
      </MovieCardWrapper>
      <FavouriteMovies />
    </div>
    <Footer />
  </div>
);

export default hot(App);
