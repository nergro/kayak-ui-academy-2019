import { TOGGLE_FAVORITE } from '../actions/favorites';

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
    default:
      return state;
  }
};

export default favorites;
