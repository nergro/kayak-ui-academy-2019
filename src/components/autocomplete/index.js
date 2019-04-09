import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';

import { getMovies, getGenres } from '../../services/movieDB';

const moviesMemo = {};

class Autocomplete extends PureComponent {
  constructor() {
    super();
    this.state = {
      results: [],
      genres: [],
      inputValue: '',
      isOpen: false
    };
    this.handleSearch = debounce(this.handleSearch, 300);
    this.autoCompleteRef = React.createRef();
  }

  componentDidMount() {
    getGenres().then(({ genres }) => this.setState({ genres }));
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  cleanValues = () => {
    this.setState({
      results: [],
      inputValue: ''
    });
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
    if (inputValue.length < 3) {
      this.setState({ results: [] });
      return;
    }

    if (moviesMemo[inputValue]) {
      this.setState({ results: moviesMemo[inputValue] });
    } else {
      getMovies(inputValue).then(({ results }) => {
        const slicedResults = results.slice(0, 8);
        moviesMemo[inputValue] = slicedResults;
        this.setState({ results: slicedResults });
      });
    }
  }

  renderGenres(ids) {
    const { genres } = this.state;
    const matchedGenres = [];
    ids.forEach(id => {
      const matchedGenre = genres.find(genre => genre.id === id);
      matchedGenres.push(matchedGenre);
    });
    return matchedGenres.map(genre => (
      <span style={{ marginRight: 3 }} key={genre.name}>
        {genre.name}
      </span>
    ));
  }

  renderResults() {
    const { results } = this.state;
    const { handleSelect } = this.props;
    return results.map(movie => (
      <div
        key={movie.id}
        className="item"
        onClick={() => {
          handleSelect(movie);
          this.cleanValues();
        }}
      >
        <span className="title">{`${movie.original_title} (${movie.release_date})`}</span>
        <span className="meta">{this.renderGenres(movie.genre_ids)}</span>
      </div>
    ));
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
  handleSelect: PropTypes.func.isRequired
};

export default Autocomplete;
