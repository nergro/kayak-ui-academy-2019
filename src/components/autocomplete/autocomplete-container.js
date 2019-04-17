import { connect } from 'react-redux';

import { setGenres, setMovies, clearMovies } from '../../actions/search';
import Autocomplete from './autocomplete';

const mapStateToProps = state => ({
  genres: state.search.genres,
  results: state.search.movies,
  isMoviesLoading: state.search.isMoviesLoading
});

const mapDispatchToProps = {
  setGenres,
  setMovies,
  clearMovies
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Autocomplete);
