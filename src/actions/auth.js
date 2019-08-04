import { getRequestToken, getAccessToken } from '../services/movieDB';

export const REQUEST_TOKEN_LOADING = 'REQUEST_TOKEN_START';
export const REQUEST_TOKEN_SUCCESS = 'REQUEST_TOKEN_SUCCESS';
export const REQUEST_TOKEN_FAILED = 'REQUEST_TOKEN_FAILED';

export const ACCESS_TOKEN_SUCCESS = 'ACCESS_TOKEN_SUCCESS';
export const ACCESS_TOKEN_FAILED = 'ACCESS_TOKEN_FAILED';
export const ACCESS_TOKEN_LOADING = 'ACCESS_TOKEN_LOADING';

const REQUEST_TOKEN = 'REQUEST_TOKEN';
const ACCESS_TOKEN = 'ACCESS_TOKEN';

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

const accessTokenSuccess = token => ({
  type: ACCESS_TOKEN_SUCCESS,
  access_token: token
});

const accessTokenFailed = () => ({
  type: ACCESS_TOKEN_FAILED
});

export const loginUser = () => (dispatch, getState, { storageClient }) => {
  dispatch(accessTokenLoading());
  const request_token = storageClient.get(REQUEST_TOKEN);
  return getAccessToken(request_token).then(
    token => {
      dispatch(accessTokenSuccess(token));
      storageClient.set(ACCESS_TOKEN, token);
    },
    error => {
      dispatch(accessTokenFailed());
    }
  );
};
