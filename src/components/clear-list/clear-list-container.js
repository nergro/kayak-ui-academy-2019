import { connect } from 'react-redux';
import ClearList from './clear-list';

import { clearList } from '../../actions/lists';

const mapStateToProps = state => ({
  loading: state.lists.loading,
  error: state.lists.error,
  listCleared: state.lists.listCleared
});

const mapDispatchToProps = {
  clearList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearList);
