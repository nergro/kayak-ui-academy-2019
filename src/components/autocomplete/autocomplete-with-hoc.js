import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import withClickOutside from '../../hoc/with-click-outside';

class Autocomplete extends PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: ''
    };
    this.handleSearch = debounce(this.handleSearch, 300);
  }

  componentDidMount() {
    this.props.setGenres();
  }

  cleanValues = () => {
    this.props.clearMovies();
  };

  updateValue = e => {
    this.setState({
      inputValue: e.target.value
    });
    this.handleSearch();
  };

  handleSearch() {
    const { inputValue } = this.state;
    this.props.setMovies(inputValue);
  }

  renderGenres(ids) {
    const { genres } = this.props;

    const matchedGenres = ids.map(id => genres[id]);

    return matchedGenres.map(genre => (
      <span style={{ marginRight: 3 }} key={genre.name}>
        {genre.name}
      </span>
    ));
  }

  renderResults() {
    const { handleSelect, results, isMoviesLoading } = this.props;
    return (
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
                this.cleanValues();
              }}
            >
              <span className="title">{`${movie.original_title} (${movie.release_date})`}</span>
              <span className="meta">{this.renderGenres(movie.genre_ids)}</span>
            </div>
          ))
        )}
      </div>
    );
  }

  render() {
    const { inputValue } = this.state;
    const { isOpen, setIsOpen, componentRef } = this.props;

    return (
      <div ref={componentRef} className="control control--has-icon-left">
        <i className="control__icon fas fa-film" />
        <input
          className="input"
          onChange={this.updateValue}
          onFocus={setIsOpen}
          value={inputValue}
          id="movies-autocomplete"
          type="search"
          autoComplete="off"
          name="q"
          placeholder="any text phrase to search"
          aria-label="Search through app content"
        />
        {isOpen && <div className="menu">{this.renderResults()}</div>}
      </div>
    );
  }
}

Autocomplete.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  genres: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  clearMovies: PropTypes.func.isRequired,
  isMoviesLoading: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  componentRef: PropTypes.object.isRequired
};

export default withClickOutside(Autocomplete);
