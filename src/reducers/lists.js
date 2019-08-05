import {
  GET_LISTS_LOADING,
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILED,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
  GET_LIST_FAILED
} from '../actions/lists';

const initialState = {
  lists: [],
  loading: false,
  listData: {}
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case GET_LISTS_LOADING:
      return { ...state, loading: true };
    case GET_LISTS_SUCCESS:
      return { ...state, loading: false, lists: action.lists };
    case GET_LISTS_FAILED:
      return { ...state, loading: false, error: true };
    case GET_LIST_LOADING:
      return { ...state, loading: true };
    case GET_LIST_SUCCESS:
      return { ...state, loading: false, listData: action.data };
    case GET_LIST_FAILED:
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};

export default auth;
