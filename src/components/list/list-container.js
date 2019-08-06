import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import List from './list';

import { fetchList } from '../../actions/lists';

const findList = (lists, listId) => {
  const list = lists.find(l => {
    return l.data.id.toString() === listId;
  });
  return list;
};

const mapStateToProps = (state, ownProps) => {
  return {
    list: findList(state.lists.fetchedLists, ownProps.match.params.id).data
  };
};

const mapDispatchToProps = {
  fetchList
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(List));
