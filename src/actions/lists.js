import { getLists, getList } from '../services/movieDB';

export const GET_LISTS_LOADING = 'GET_LISTS_LOADING';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_FAILED = 'GET_LISTS_FAILED';

export const GET_LIST_LOADING = 'GET_LIST_LOADING';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILED = 'GET_LIST_FAILED';

const getListsLoading = () => ({
  type: GET_LISTS_LOADING
});
const getListsSuccess = lists => ({
  type: GET_LISTS_SUCCESS,
  lists
});
const getListsFailed = () => ({
  type: GET_LISTS_FAILED
});

export const fetchLists = () => (dispatch, getState, { storageClient }) => {
  const accountId = storageClient.get('ACCOUNT_ID');
  dispatch(getListsLoading());
  return getLists(accountId).then(
    lists => {
      dispatch(getListsSuccess(lists));
    },
    error => {
      dispatch(getListsFailed());
    }
  );
};

const getListLoading = () => ({
  type: GET_LIST_LOADING
});
const getListSuccess = data => {
  return {
    type: GET_LIST_SUCCESS,
    data
  };
};
const getListFailed = () => ({
  type: GET_LIST_FAILED
});

export const fetchList = (listId, page) => (dispatch, getState, { storageClient }) => {
  dispatch(getListLoading());
  return getList(listId, page).then(
    data => {
      dispatch(getListSuccess(data.data));
    },
    error => {
      dispatch(getListFailed());
    }
  );
};
