import {
  getLists,
  getList,
  getAllLists,
  createList,
  updateList as updList,
  clearList as clList,
  deleteList as delList
} from '../services/movieDB';

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

export const CLEAR_LIST_LOADING = 'CLEAR_LIST_LOADING';
export const CLEAR_LIST_SUCCESS = 'CLEAR_LIST_SUCCESS';
export const CLEAR_LIST_FAILED = 'CLEAR_LIST_FAILED';

export const DELETE_LIST_LOADING = 'DELETE_LIST_LOADING';
export const DELETE_LIST_SUCCESS = 'DELETE_LIST_SUCCESS';
export const DELETE_LIST_FAILED = 'DELETE_LIST_FAILED';

const getListsLoading = () => ({
  type: GET_LISTS_LOADING
});
const getListsSuccess = data => {
  return {
    type: GET_LISTS_SUCCESS,
    data
  };
};
const getListsFailed = () => ({
  type: GET_LISTS_FAILED
});

export const fetchLists = () => (dispatch, getState, { storageClient }) => {
  const accountId = storageClient.get('ACCOUNT_ID');
  dispatch(getListsLoading());
  return getLists(accountId).then(
    data => {
      dispatch(getListsSuccess(data));
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

const clearListLoading = () => ({
  type: CLEAR_LIST_LOADING
});
const clearListSuccess = success => ({
  type: CLEAR_LIST_SUCCESS,
  success
});
const clearListFailed = () => ({
  type: CLEAR_LIST_FAILED
});

export const clearList = listId => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(clearListLoading());
  return clList(listId, accessToken).then(
    success => {
      dispatch(clearListSuccess(success));
    },
    error => {
      dispatch(clearListFailed());
    }
  );
};

const deleteListLoading = () => ({
  type: DELETE_LIST_LOADING
});
const deleteListSuccess = success => ({
  type: DELETE_LIST_SUCCESS,
  success
});
const deleteListFailed = () => ({
  type: DELETE_LIST_FAILED
});

export const deleteList = listId => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(deleteListLoading());
  return delList(listId, accessToken).then(
    success => {
      dispatch(deleteListSuccess(success));
    },
    error => {
      dispatch(deleteListFailed());
    }
  );
};
