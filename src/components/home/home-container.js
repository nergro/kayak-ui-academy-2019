import { connect } from 'react-redux';
import Home from './home';
import { addMovie } from '../../actions/lists';

const mapStateToProps = state => ({
  selectedMovie: state.search.selectedMovie,
  isAuth: state.auth.isAuth,
  fetchedLists: state.lists.fetchedLists
});

const mapDispatchToProps = { addMovie };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
