import { connect } from 'react-redux';

import { getReqToken, loginUser } from '../../actions/auth';
import Navbar from './navbar';

const mapStateToProps = state => ({
  requestToken: state.auth.requestToken
  //   results: state.search.movies,
  //   isMoviesLoading: state.search.isMoviesLoading
});

const mapDispatchToProps = {
  getReqToken,
  loginUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
