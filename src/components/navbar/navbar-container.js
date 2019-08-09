import { connect } from 'react-redux';

import { getReqToken, logoutUser } from '../../actions/auth';
import Navbar from './navbar';

const mapStateToProps = state => ({
  isAuth: state.auth.isAuth
});

const mapDispatchToProps = {
  getReqToken,
  logoutUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
