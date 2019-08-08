import {
  getLists,
  createList,
  updateList as updList,
  clearList as clList,
  deleteList as delList,
  addCommentToMovie,
  addMovieToList
} from '../services/movieDB';

export const LOADING = 'LOADING';
export const FAILED = 'FAILED';
export const GET_LISTS = 'GET_LISTS';
export const EDIT_LIST = 'EDIT_LIST';

const loading = () => ({
  type: LOADING
});
const failed = () => ({
  type: FAILED
});
const editListSuccess = () => ({
  type: EDIT_LIST
});

const getListsSuccess = data => {
  return {
    type: GET_LISTS,
    data
  };
};

export const fetchLists = () => (dispatch, getState, { storageClient }) => {
  const accountId = storageClient.get('ACCOUNT_ID');
  dispatch(loading());
  return getLists(accountId).then(
    data => {
      dispatch(getListsSuccess(data));
    },
    () => {
      dispatch(failed());
    }
  );
};

export const makeList = (title, description) => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(loading());
  return createList(title, description, accessToken).then(
    () => {
      dispatch(editListSuccess());
      dispatch(fetchLists());
    },
    () => {
      dispatch(failed());
    }
  );
};

export const updateList = (title, description, listId) => (
  dispatch,
  getState,
  { storageClient }
) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(loading());
  return updList(title, description, accessToken, listId).then(
    () => {
      dispatch(editListSuccess());
      dispatch(fetchLists());
    },
    () => {
      dispatch(failed());
    }
  );
};

export const clearList = listId => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(loading());
  return clList(listId, accessToken).then(
    () => {
      dispatch(editListSuccess());
      dispatch(fetchLists());
    },
    () => {
      dispatch(failed());
    }
  );
};

export const deleteList = listId => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(loading());
  return delList(listId, accessToken).then(
    () => {
      dispatch(editListSuccess());
      dispatch(fetchLists());
    },
    () => {
      dispatch(failed());
    }
  );
};

export const addComment = (listId, commentData) => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(loading());

  return addCommentToMovie(listId, accessToken, { items: [commentData] }).then(
    () => {
      dispatch(editListSuccess());
      dispatch(fetchLists());
    },
    () => {
      dispatch(failed());
    }
  );
};

export const addMovie = (listId, movieId) => (dispatch, getState, { storageClient }) => {
  const accessToken = storageClient.get('ACCESS_TOKEN');
  dispatch(loading());
  return addMovieToList(listId, movieId, accessToken).then(
    () => {
      dispatch(editListSuccess());
      dispatch(fetchLists());
    },
    () => {
      dispatch(failed);
    }
  );
};
