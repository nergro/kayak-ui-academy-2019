import {
  GOT_GENRES,
  GOT_MOVIES,
  CLEAR_MOVIES,
  GOT_MOVIES_LOADING,
  SELECT_MOVIE
} from '../actions/search';

const initialState = {
  movies: [],
  genres: {},
  isMoviesLoading: false,
  selectedMovie: null
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
    case SELECT_MOVIE:
      return { ...state, selectedMovie: action.selectedMovie };
    default:
      return state;
  }
};

export default search;
