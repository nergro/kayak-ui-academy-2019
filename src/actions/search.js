import { getMovies, getGenres } from '../services/movieDB';

export const GOT_GENRES = 'GOT_GENRES';
export const GOT_MOVIES = 'GOT_MOVIES';
export const CLEAR_MOVIES = 'CLEAR_MOVIES';
export const GOT_MOVIES_LOADING = 'GOT_MOVIES_LOADING';
export const GOT_MOVIED_FAILED = 'GOT_MOVIED_FAILED';
export const SELECT_MOVIE = 'SELECT_MOVIE';

const gotGenres = genres => ({
  type: GOT_GENRES,
  genres
});

const gotMovies = movies => ({
  type: GOT_MOVIES,
  movies
});

const gotMoviesLoading = () => ({
  type: GOT_MOVIES_LOADING
});

const gotMoviesFailed = errorMessage => ({
  type: GOT_MOVIED_FAILED,
  errorMessage
});

export const clearMovies = () => ({
  type: CLEAR_MOVIES
});

export const setGenres = () => (dispatch, getState, { storageClient }) => {
  console.log('storage:', storageClient);
  return getGenres().then(({ genres }) => {
    dispatch(gotGenres(genres));
  });
};

export const setMovies = inputValue => (dispatch, getState) => {
  if (inputValue.length < 3) {
    return dispatch(gotMovies([]));
  }

  dispatch(gotMoviesLoading());

  return getMovies(inputValue).then(
    movies => {
      const {
        favorites: { movies: favoriteMovies }
      } = getState();

      const mappedMovies = movies.map(movie => ({
        ...movie,
        favorite: !!favoriteMovies.find(m => m.id === movie.id)
      }));

      dispatch(gotMovies(mappedMovies));
    },
    error => {
      dispatch(gotMoviesFailed(error));
    }
  );
};

const selectMovie = selectedMovie => ({
  type: SELECT_MOVIE,
  selectedMovie
});

export const selectedMovie = movie => dispatch => {
  dispatch(selectMovie(movie));
};
