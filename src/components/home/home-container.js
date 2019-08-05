import { connect } from 'react-redux';
import Home from './home';

const mapStateToProps = state => ({
  selectedMovie: state.search.selectedMovie
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
