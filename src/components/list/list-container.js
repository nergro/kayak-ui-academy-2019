import { connect } from 'react-redux';
import List from './list';

import { fetchList } from '../../actions/lists';

const mapStateToProps = state => ({
  listData: state.lists.listData,
  loading: state.lists.loading,
  error: state.lists.error,
  fetchedLists: state.lists.fetchedLists
});

const mapDispatchToProps = {
  fetchList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
