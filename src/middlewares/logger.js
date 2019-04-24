import { SET_MOVIES } from '../actions/favorites';

export default store => next => action => {
  switch (action.type) {
    case SET_MOVIES:
      console.log('doing special action', action.type);
      return next(action);
    default:
      console.log('doing action', action.type);
      return next(action);
  }
};
