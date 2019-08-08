import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { toggleFavorite as toggleFavoriteAction } from '../../actions/favorites';

const imagePath = 'https://image.tmdb.org/t/p/w500';

const MovieCard = ({ selectedMovie, toggleFavorite, isFavorite, isAuth, lists }) => {
  const addToList = e => {
    console.log(e.target.value);
  };
  console.log('FROM CARD');
  console.log(lists);
  return (
    <div>
      <div className="mb-30">
        <h3>Selected Movie</h3>
      </div>
      <article className="card mb-30">
        <div className="card__header">
          <div className="asset-meta">{selectedMovie.vote_average}</div>
          <h2 className="asset-title">{selectedMovie.title}</h2>
        </div>
        <div className="card__body">
          <div className="asset-meta">{selectedMovie.release_date}</div>
          <div className="asset-meta">{selectedMovie.original_title}</div>
          <div className="asset-meta">{selectedMovie.original_language}</div>
          <div className="asset-description">{selectedMovie.overview}</div>
          <button
            type="button"
            className="button mt-30"
            onClick={() => toggleFavorite(selectedMovie)}
            style={{ marginRight: '1rem' }}
          >
            {isFavorite ? 'Remove from favorites!' : 'Add to favorites!'}
          </button>
          {isAuth ? (
            <React.Fragment>
              <select className="button" name="list" onChange={addToList}>
                <option value="" disabled>
                  Add to list
                </option>
                <option value="listid" id="123">
                  List 1
                </option>
                <option value="listid" id="12345">
                  List 2
                </option>
                <option value="listid">List 3</option>
                <option value="listid">List 4</option>
              </select>
              {lists.length > 0 ? (
                <div className="card-list">
                  <h3>Belongs to these lists:</h3>
                  <div className="card-list__body">
                    {lists.map(list => {
                      const listUrl = '/list/' + list.data.id + '/1';
                      return (
                        <div className="card-list__body--item" key={list.data.id}>
                          <Link to={listUrl}>{list.data.name}</Link>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : null}
            </React.Fragment>
          ) : null}
        </div>
        <div className="card__thumbnail">
          <img
            className="asset-poster"
            src={`${imagePath}${selectedMovie.poster_path}`}
            alt={selectedMovie.original_title}
          />
        </div>
      </article>
    </div>
  );
};

MovieCard.propTypes = {
  selectedMovie: PropTypes.shape({ id: PropTypes.number.isRequired }).isRequired,
  toggleFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  isAuth: PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => {
  const isFavorite = !!state.favorites.movies.find(movie => movie.id === ownProps.selectedMovie.id);

  return {
    isFavorite
  };
};

const mapDispatchToProps = {
  toggleFavorite: toggleFavoriteAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieCard);
