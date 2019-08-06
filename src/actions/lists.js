import { getLists, getList, createList, updateList as updList } from '../services/movieDB';

export const GET_LISTS_LOADING = 'GET_LISTS_LOADING';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_FAILED = 'GET_LISTS_FAILED';

export const GET_LIST_LOADING = 'GET_LIST_LOADING';
export const GET_LIST_SUCCESS = 'GET_LIST_SUCCESS';
export const GET_LIST_FAILED = 'GET_LIST_FAILED';

export const CREATE_LIST_LOADING = 'CREATE_LIST_LOADING';
export const CREATE_LIST_SUCCESS = 'CREATE_LIST_SUCCESS';
export const CREATE_LIST_FAILED = 'CREATE_LIST_FAILED';

export const UPDATE_LIST_LOADING = 'UPDATE_LIST_LOADING';
export const UPDATE_LIST_SUCCESS = 'UPDATE_LIST_SUCCESS';
export const UPDATE_LIST_FAILED = 'UPDATE_LIST_FAILED';

const getListsLoading = () => ({
  type: GET_LISTS_LOADING
});
const getListsSuccess = lists => {
  return {
    type: GET_LISTS_SUCCESS,
    lists
  };
};
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
const getListSuccess = data => ({
  type: GET_LIST_SUCCESS,
  data
});
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

const createListLoading = () => ({
  type: CREATE_LIST_LOADING
});
const createListSuccess = id => ({
  type: CREATE_LIST_SUCCESS,
  id
});
const createListFailed = () => ({
  type: CREATE_LIST_FAILED
});

export const makeList = (title, description) => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(createListLoading());
  return createList(title, description, accessToken).then(
    id => {
      dispatch(createListSuccess(id));
    },
    error => {
      console.log(error);
      console.log(error.message);
      dispatch(createListFailed());
    }
  );
};

const updateListLoading = () => ({
  type: UPDATE_LIST_LOADING
});
const updateListSuccess = success => ({
  type: UPDATE_LIST_SUCCESS,
  success
});
const updateListFailed = () => ({
  type: UPDATE_LIST_FAILED
});

export const updateList = (title, description, listId) => (
  dispatch,
  getState,
  { storageClient }
) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(updateListLoading());
  return updList(title, description, accessToken, listId).then(
    success => {
      dispatch(updateListSuccess(success));
    },
    error => {
      dispatch(updateListFailed());
    }
  );
};
