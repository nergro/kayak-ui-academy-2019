import { connect } from 'react-redux';
import CreateList from './create-list';

import { makeList } from '../../actions/lists';

const mapStateToProps = state => ({
  loading: state.lists.loading,
  error: state.lists.error,
  listPosted: state.lists.listPosted
});

const mapDispatchToProps = {
  makeList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateList);
