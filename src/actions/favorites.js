import { getMoviesList } from '../services/movieDB';

export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_MOVIES = 'SET_MOVIES';

const FAVORITE_MOVIES_KEY = 'FAVORITE_MOVIES';

const toggleFavoriteAction = movie => ({
  type: TOGGLE_FAVORITE,
  movie
});

const setMoviesAction = movies => ({
  type: SET_MOVIES,
  movies
});

export const toggleFavorite = movie => (dispatch, getState, { storageClient }) => {
  const moviesInStorage =
    (storageClient.get(FAVORITE_MOVIES_KEY) && storageClient.get(FAVORITE_MOVIES_KEY).split(',')) ||
    [];

  const movieId = movie.id.toString();

  if (moviesInStorage.includes(movieId)) {
    const index = moviesInStorage.findIndex(id => id === movieId);
    moviesInStorage.splice(index, 1);
  } else {
    moviesInStorage.push(movieId);
  }

  storageClient.set(FAVORITE_MOVIES_KEY, moviesInStorage);

  return dispatch(toggleFavoriteAction(movie));
};

export const setMovies = () => (dispatch, getState, { storageClient }) => {
  const ids =
    (storageClient.get(FAVORITE_MOVIES_KEY) && storageClient.get(FAVORITE_MOVIES_KEY).split(',')) ||
    [];

  return getMoviesList(ids).then(movies => {
    return dispatch(setMoviesAction(movies));
  });
};
