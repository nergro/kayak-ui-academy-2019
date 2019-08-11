import { connect } from 'react-redux';
import Lists from './lists';

const mapStateToProps = state => ({
  lists: state.lists.lists,
  loading: state.lists.loading
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
