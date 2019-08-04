import { getRequestToken, getAccessToken } from '../services/movieDB';

export const REQUEST_TOKEN_LOADING = 'REQUEST_TOKEN_START';
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_TOKEN_FAILED = 'REQUEST_TOKEN_FAILED';

export const ACCESS_TOKEN_SUCCESS = 'ACCESS_TOKEN_SUCCESS';
export const ACCESS_TOKEN_FAILED = 'ACCESS_TOKEN_FAILED';
export const ACCESS_TOKEN_LOADING = 'ACCESS_TOKEN_LOADING';

export const LOGOUT = '';

const REQUEST_TOKEN = 'REQUEST_TOKEN';
const ACCESS_TOKEN = 'ACCESS_TOKEN';
const ACCOUNT_ID = 'ACCOUNT_ID';

const requestTokenLoading = () => ({
  type: REQUEST_TOKEN_LOADING
});

const requestTokenSuccess = token => ({
  type: REQUEST_TOKEN_SUCCESS,
  request_token: token
});

const requestTokenFailed = () => ({
  type: REQUEST_TOKEN_FAILED
});

export const getReqToken = () => (dispatch, getState, { storageClient }) => {
  dispatch(requestTokenLoading());
  return getRequestToken().then(
    token => {
      dispatch(requestTokenSuccess(token));
      storageClient.set(REQUEST_TOKEN, token);
      window.location.href = 'https://www.themoviedb.org/auth/access?request_token=' + token;
    },
    error => {
      dispatch(requestTokenFailed());
    }
  );
};

const accessTokenLoading = () => ({
  type: ACCESS_TOKEN_LOADING
});

const accessTokenSuccess = (token, id) => ({
  type: ACCESS_TOKEN_SUCCESS,
  access_token: token,
  accound_id: id
});

const accessTokenFailed = () => ({
  type: ACCESS_TOKEN_FAILED
});

export const loginUser = () => (dispatch, getState, { storageClient }) => {
  dispatch(accessTokenLoading());
  const request_token = storageClient.get(REQUEST_TOKEN);
  return getAccessToken(request_token).then(
    data => {
      dispatch(accessTokenSuccess(data.access_token, data.account_id));
      storageClient.set(ACCESS_TOKEN, data.access_token);
      storageClient.set(ACCOUNT_ID, data.account_id);
    },
    error => {
      dispatch(accessTokenFailed());
    }
  );
};

const logout = () => ({
  type: LOGOUT
});

export const logoutUser = () => (dispatch, getState, { storageClient }) => {
  dispatch(logout());
  storageClient.remove(ACCESS_TOKEN);
  storageClient.remove(REQUEST_TOKEN);
  storageClient.remove(ACCOUNT_ID);
};

export const checkUser = () => (dispatch, getState, { storageClient }) => {
  if (storageClient.get(REQUEST_TOKEN)) {
    dispatch(loginUser());
  }
};
