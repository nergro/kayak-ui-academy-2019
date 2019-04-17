import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const FavouriteMovies = ({ movies }) => (
  <aside className="aside">
    <div className="container">
      <div className="content-wrapper">
        <h3>My Favourites</h3>
        {movies.map(movie => (
          <div key={movie.id}>{movie.title}</div>
        ))}
      </div>
    </div>
  </aside>
);

FavouriteMovies.propTypes = {
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.favorites.movies
});

export default connect(mapStateToProps)(FavouriteMovies);
