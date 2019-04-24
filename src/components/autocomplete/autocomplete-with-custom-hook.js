import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import useClickOutside from '../../hooks/use-click-outside';

import ResultsList from '../results-list';

const componentRef = React.createRef();

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

  const [isOpen, setIsOpen] = useClickOutside(componentRef);

  return (
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
      {isOpen && (
        <div className="menu">
          <ResultsList
            isMoviesLoading={isMoviesLoading}
            results={results}
            handleSelect={handleSelect}
            clearMovies={clearMovies}
            genres={genres}
          />
        </div>
      )}
    </div>
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
