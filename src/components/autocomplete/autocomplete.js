import React, { PureComponent } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

class Autocomplete extends PureComponent {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      isOpen: false
    };
    this.handleSearch = debounce(this.handleSearch, 300);
    this.autoCompleteRef = React.createRef();
  }

  componentDidMount() {
    this.props.setGenres();
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
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

  handleClickOutside = event => {
    if (this.autoCompleteRef && !this.autoCompleteRef.current.contains(event.target)) {
      this.setState({
        isOpen: false
      });
    }
  };

  openSearch = () => {
    this.setState({
      isOpen: true
    });
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
    const { results, isMoviesLoading, selectedMovie, history } = this.props;
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
                history.push('/');
                selectedMovie(movie);
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
    const { inputValue, isOpen } = this.state;
    return (
      <div ref={this.autoCompleteRef} className="control control--has-icon-left">
        <i className="control__icon fas fa-film" />
        <input
          className="input"
          onChange={this.updateValue}
          onFocus={this.openSearch}
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
  genres: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired,
  setGenres: PropTypes.func.isRequired,
  setMovies: PropTypes.func.isRequired,
  clearMovies: PropTypes.func.isRequired,
  isMoviesLoading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  selectedMovie: PropTypes.func.isRequired
};

export default withRouter(Autocomplete);
