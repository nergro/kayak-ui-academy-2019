import { TOGGLE_FAVORITE, SET_MOVIES } from '../actions/favorites';

const initialState = {
  movies: []
};

const favorites = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: {
      const movieIndex = state.movies.findIndex(m => m.id === action.movie.id);

      if (movieIndex < 0) {
        const newMovies = [...state.movies, action.movie];
        return {
          ...state,
          movies: newMovies
        };
      }

      const newMovies = [...state.movies];
      newMovies.splice(movieIndex, 1);

      return {
        ...state,
        movies: newMovies
      };
    }
    case SET_MOVIES:
      return { ...state, movies: action.movies };
    default:
      return state;
  }
};

export default favorites;
