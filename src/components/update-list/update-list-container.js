import { connect } from 'react-redux';
import CreateList from './update-list';

import { updateList, fetchList } from '../../actions/lists';

const mapStateToProps = state => ({
  loading: state.lists.loading,
  error: state.lists.error,
  listUpdated: state.lists.listUpdated,
  title: state.lists.listTitle,
  description: state.lists.listDescription
});

const mapDispatchToProps = {
  updateList,
  fetchList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateList);
