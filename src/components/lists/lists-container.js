import { connect } from 'react-redux';
import Lists from './lists';

import { fetchLists } from '../../actions/lists';

const mapStateToProps = state => ({
  lists: state.lists.lists,
  loading: state.lists.loading,
  error: state.lists.error
});

const mapDispatchToProps = {
  fetchLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
