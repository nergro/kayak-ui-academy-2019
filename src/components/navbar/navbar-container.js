import { connect } from 'react-redux';

import { getReqToken, loginUser, logoutUser, checkUser } from '../../actions/auth';
import Navbar from './navbar';

const mapStateToProps = state => ({
  request_token: state.auth.request_token,
  access_token: state.auth.access_token
});

const mapDispatchToProps = {
  getReqToken,
  loginUser,
  logoutUser,
  checkUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
