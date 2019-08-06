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
  UPDATE_LIST_SUCCESS,
  CLEAR_LIST_LOADING,
  CLEAR_LIST_SUCCESS,
  CLEAR_LIST_FAILED,
  DELETE_LIST_LOADING,
  DELETE_LIST_SUCCESS,
  DELETE_LIST_FAILED
} from '../actions/lists';

const initialState = {
  lists: [],
  loading: false,
  listData: {},
  fetchedLists: [],
  listTitle: '',
  listDescription: '',
  error: false,
  createdListId: '',
  listPosted: false,
  listUpdated: false,
  listCleared: false,
  listDeleted: false
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
        listId: action.data.id,
        fetchedLists: [...state.fetchedLists, action.data.id.toString()],
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
    case CLEAR_LIST_LOADING:
      return { ...state, loading: true, listCleared: false };
    case CLEAR_LIST_SUCCESS:
      return { ...state, loading: false, listCleared: true };
    case CLEAR_LIST_FAILED:
      return { ...state, loading: false, error: true, listCleared: false };
    case DELETE_LIST_LOADING:
      return { ...state, loading: true, listDeleted: false };
    case DELETE_LIST_SUCCESS:
      return { ...state, loading: false, listDeleted: true };
    case DELETE_LIST_FAILED:
      return { ...state, loading: false, error: true, listDeleted: false };
    default:
      return state;
  }
};

export default auth;
