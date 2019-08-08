import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
  selectedMovie: state.search.selectedMovie,
  isAuth: state.auth.isAuth,
  fetchedLists: state.lists.fetchedLists
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
