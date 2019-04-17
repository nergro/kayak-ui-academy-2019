import { GOT_GENRES, GOT_MOVIES, CLEAR_MOVIES, GOT_MOVIES_LOADING } from '../actions/search';

const initialState = {
  movies: [],
  genres: {},
  isMoviesLoading: false
};

const search = (state = initialState, action) => {
  switch (action.type) {
    case GOT_GENRES: {
      const genresMap = {};

      action.genres.forEach(genre => {
        genresMap[genre.id] = genre;
      });

      return {
        ...state,
        genres: genresMap
      };
    }
    case GOT_MOVIES: {
      return {
        ...state,
        movies: action.movies,
        isMoviesLoading: false
      };
    }
    case CLEAR_MOVIES: {
      return {
        ...state,
        movies: []
      };
    }
    case GOT_MOVIES_LOADING: {
      return {
        ...state,
        isMoviesLoading: true
      };
    }
    default:
      return state;
  }
};

export default search;
