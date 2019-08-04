import { combineReducers } from 'redux';

import search from './search';
import favorites from './favorites';
import auth from './auth';

export default combineReducers({ search, favorites, auth });
