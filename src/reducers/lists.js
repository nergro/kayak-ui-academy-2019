import { LOADING, FAILED, GET_LISTS, EDIT_LIST } from '../actions/lists';

const initialState = {
  lists: [],
  fetchedLists: [],
  loading: false,
  error: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: true };
    case FAILED:
      return { ...state, loading: false, error: true };
    case GET_LISTS:
      return {
        ...state,
        loading: false,
        lists: action.data.lists,
        fetchedLists: action.data.fetchedLists
      };
    case EDIT_LIST:
      return { ...state, loading: false };
    default:
      return state;
  }
};

export default auth;
