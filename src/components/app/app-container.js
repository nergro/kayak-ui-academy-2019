import { connect } from 'react-redux';
import App from './app';

import { checkUser } from '../../actions/auth';

const mapStateToProps = state => ({
  loading: state.auth.loading
});

const mapDispatchToProps = {
  checkUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
