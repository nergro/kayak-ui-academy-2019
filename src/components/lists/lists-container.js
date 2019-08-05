import { connect } from 'react-redux';
import Lists from './lists';

import { fetchLists } from '../../actions/lists';

const mapStateToProps = state => ({
  lists: state.lists.lists,
  pages: state.lists.pages,
  loading: state.lists.loading
});

const mapDispatchToProps = {
  fetchLists
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Lists);
