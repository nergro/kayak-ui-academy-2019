import { connect } from 'react-redux';

import { setGenres, setMovies, clearMovies, selectedMovie } from '../../actions/search';
import Autocomplete from './autocomplete';

const mapStateToProps = state => ({
  genres: state.search.genres,
  results: state.search.movies,
  isMoviesLoading: state.search.isMoviesLoading
});

const mapDispatchToProps = {
  setGenres,
  setMovies,
  clearMovies,
  selectedMovie
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);
