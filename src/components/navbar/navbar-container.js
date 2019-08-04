import { connect } from 'react-redux';

import { getReqToken, logoutUser } from '../../actions/auth';
import Navbar from './navbar';

const mapStateToProps = state => ({
  request_token: state.auth.request_token,
  access_token: state.auth.access_token
});

const mapDispatchToProps = {
  getReqToken,
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
