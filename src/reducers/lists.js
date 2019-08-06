import {
  GET_LISTS_LOADING,
  GET_LISTS_SUCCESS,
  GET_LISTS_FAILED,
  GET_LIST_LOADING,
  GET_LIST_SUCCESS,
  GET_LIST_FAILED,
  CREATE_LIST_LOADING,
  CREATE_LIST_SUCCESS,
  CREATE_LIST_FAILED,
  UPDATE_LIST_FAILED,
  UPDATE_LIST_LOADING,
  UPDATE_LIST_SUCCESS
} from '../actions/lists';

const initialState = {
  lists: [],
  loading: false,
  listData: {},
  listTitle: '',
  listDescription: '',
  error: false,
  createdListId: '',
  listPosted: false,
  listUpdated: false
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
      return {
        ...state,
        loading: false,
        listData: action.data,
        listTitle: action.data.name,
        listDescription: action.data.description,
        error: false
      };
    case GET_LIST_FAILED:
      return { ...state, loading: false, error: true };
    case CREATE_LIST_LOADING:
      return { ...state, loading: true, listPosted: false };
    case CREATE_LIST_SUCCESS:
      return { ...state, loading: false, createdListId: action.id, listPosted: true };
    case CREATE_LIST_FAILED:
      return { ...state, loading: false, error: true, listPosted: false };
    case UPDATE_LIST_LOADING:
      return { ...state, loading: true, listUpdated: false };
    case UPDATE_LIST_SUCCESS:
      return { ...state, loading: false, listUpdated: true };
    case UPDATE_LIST_FAILED:
      return { ...state, loading: false, error: true, listUpdated: false };
    default:
      return state;
  }
};

export default auth;
