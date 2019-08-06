import { connect } from 'react-redux';
import CreateList from './create-list';

import { checkUser } from '../../actions/auth';

const mapStateToProps = state => ({
  //   loading: state.auth.loading
});

const mapDispatchToProps = {
  //   checkUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateList);
