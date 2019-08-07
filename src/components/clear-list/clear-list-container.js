import { connect } from 'react-redux';
import ClearList from './clear-list';

import { clearList, deleteList } from '../../actions/lists';

const mapStateToProps = state => ({
  loading: state.lists.loading
});

const mapDispatchToProps = {
  clearList,
  deleteList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ClearList);
