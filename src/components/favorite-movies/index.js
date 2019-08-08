import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { setMovies as setMoviesAction } from '../../actions/favorites';

const FavouriteMovies = ({ movies, setMovies, selectedMovie }) => {
  useEffect(() => {
    setMovies();
  }, []);

  const style = {
    border: selectedMovie ? '1px solid #ccc' : 'none'
  };
  return (
    <aside className="aside">
      <div className="container">
        <div className="content-wrapper">
          {movies.length === 0 ? (
            <h3>No Favourite Movies</h3>
          ) : (
            <React.Fragment>
              <h3>My Favourites</h3>
              <div className="aside-favourites" style={style}>
                {movies.map(movie => (
                  <div className="aside-favourite" key={movie.id}>
                    {movie.title}
                  </div>
                ))}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </aside>
  );
};

FavouriteMovies.propTypes = {
  movies: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  movies: state.favorites.movies
});

const mapDispatchToProps = {
  setMovies: setMoviesAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavouriteMovies);
