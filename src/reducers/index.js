import { combineReducers } from 'redux';

import search from './search';
import favorites from './favorites';
import auth from './auth';
import lists from './lists';

export default combineReducers({ search, favorites, auth, lists });
