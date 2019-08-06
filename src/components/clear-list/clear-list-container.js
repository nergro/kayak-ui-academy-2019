import { connect } from 'react-redux';
import ClearList from './clear-list';

import { clearList, deleteList } from '../../actions/lists';

const mapStateToProps = state => ({
  loading: state.lists.loading,
  error: state.lists.error,
  listCleared: state.lists.listCleared,
  listDeleted: state.lists.listDeleted
});

const mapDispatchToProps = {
  clearList,
  deleteList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearList);
