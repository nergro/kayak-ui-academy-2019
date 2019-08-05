import { getLists } from '../services/movieDB';

export const GET_LISTS_LOADING = 'GET_LISTS_LOADING';
export const GET_LISTS_SUCCESS = 'GET_LISTS_SUCCESS';
export const GET_LISTS_FAILED = 'GET_LISTS_FAILED';

const getListsLoading = () => ({
  type: GET_LISTS_LOADING
});
const getListsSuccess = (lists, pages) => ({
  type: GET_LISTS_SUCCESS,
  lists,
  pages
});
const getListsFailed = () => ({
  type: GET_LISTS_FAILED
});

export const fetchLists = page => (dispatch, getState, { storageClient }) => {
  const accountId = storageClient.get('ACCOUNT_ID');
  dispatch(getListsLoading());
  return getLists(accountId, page).then(
    res => {
      dispatch(getListsSuccess(res.lists, res.total_pages));
    },
    error => {
      dispatch(getListsFailed());
    }
  );
};
