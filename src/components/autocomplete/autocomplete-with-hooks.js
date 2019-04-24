import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import WithClickOutside from '../with-click-outside';

const Autocomplete = ({
  results,
  isMoviesLoading,
  setMovies,
  clearMovies,
  genres,
  handleSelect,
  setGenres
}) => {
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const timeoutId = setTimeout(() => setMovies(inputValue), 1000);
    return () => clearTimeout(timeoutId);
  }, [inputValue]);

  useEffect(() => {
    setGenres();
  }, []);

  const renderGenres = ids => {
    const matchedGenres = ids.map(id => genres[id]).filter(d => !!d);

    return matchedGenres.map(genre => (
      <span style={{ marginRight: 3 }} key={genre.name}>
        {genre.name}
      </span>
    ));
  };

  const resultsList = (
    <div>
      {isMoviesLoading ? (
        <div>Loading...</div>
      ) : (
        results.map(movie => (
          <div
            key={movie.id}
            className={`item ${movie.favorite ? 'favoriteItem' : ''}`}
            onClick={() => {
              handleSelect(movie);
              clearMovies();
            }}
          >
            <span className="title">{`${movie.original_title} (${movie.release_date})`}</span>
            <span className="meta">{renderGenres(movie.genre_ids)}</span>
          </div>
        ))
      )}
    </div>
  );

  return (
    <WithClickOutside>
      {({ componentRef, setIsOpen, isOpen }) => (
        <div ref={componentRef} className="control control--has-icon-left">
          <i className="control__icon fas fa-film" />
          <input
            className="input"
            onChange={e => setInputValue(e.target.value)}
            onFocus={setIsOpen}
            value={inputValue}
            id="movies-autocomplete"
            type="search"
            autoComplete="off"
            name="q"
            placeholder="any text phrase to search"
            aria-label="Search through app content"
          />
          {isOpen && <div className="menu">{resultsList}</div>}
        </div>
      )}
    </WithClickOutside>
  );
};

Autocomplete.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  genres: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  clearMovies: PropTypes.func.isRequired,
  isMoviesLoading: PropTypes.bool.isRequired
};

export default Autocomplete;
