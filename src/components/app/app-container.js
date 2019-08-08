import { connect } from 'react-redux';
import App from './app';

import { checkUser } from '../../actions/auth';
import { fetchLists } from '../../actions/lists';

const mapStateToProps = state => ({
  loading: state.auth.loading,
  accessToken: state.auth.access_token,
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  checkUser,
  fetchLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
