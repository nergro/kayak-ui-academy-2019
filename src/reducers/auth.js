import {
  REQUEST_TOKEN_LOADING,
  REQUEST_TOKEN_SUCCESS,
  REQUEST_TOKEN_FAILED,
  ACCESS_TOKEN_LOADING,
  ACCESS_TOKEN_SUCCESS,
  ACCESS_TOKEN_FAILED,
  LOGOUT
} from '../actions/auth';

const initialState = {
  request_token: '',
  access_token: '',
  accound_id: '',
  loading: false,
  error: false
};

const auth = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_TOKEN_LOADING:
      return { ...state, loading: true };
    case REQUEST_TOKEN_SUCCESS:
      return { ...state, loading: false, request_token: action.request_token };
    case REQUEST_TOKEN_FAILED:
      return { ...state, loading: false, error: true };
    case ACCESS_TOKEN_LOADING:
      return { ...state, loading: true };
    case ACCESS_TOKEN_SUCCESS:
      return {
        ...state,
        loading: false,
        access_token: action.access_token,
        account_id: action.account_id
      };
    case ACCESS_TOKEN_FAILED:
      return { ...state, loading: false, error: true };
    case LOGOUT:
      return { ...state, request_token: '', access_token: '', accound_id: '' };
    default:
      return state;
  }
};

export default auth;