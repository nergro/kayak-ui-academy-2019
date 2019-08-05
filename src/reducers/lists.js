import { GET_LISTS_LOADING, GET_LISTS_SUCCESS, GET_LISTS_FAILED } from '../actions/lists';

const initialState = {
  lists: [],
  pages: '',
  loading: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS_LOADING:
      return { ...state, loading: true };
    case GET_LISTS_SUCCESS:
      return { ...state, loading: false, lists: action.lists, total_pages: action.total_pages };
    case GET_LISTS_FAILED:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default auth;
