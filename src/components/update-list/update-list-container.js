import { connect } from 'react-redux';
import CreateList from './update-list';

import { updateList } from '../../actions/lists';

const findList = (lists, listId) => {
  const list = lists.find(l => l.data.id.toString() === listId);
  return list ? list.data : null;
};

const mapStateToProps = (state, ownProps) => ({
  loading: state.lists.loading,
  error: state.lists.error,
  list: findList(state.lists.fetchedLists, ownProps.match.params.id)
});

const mapDispatchToProps = {
  updateList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateList);
