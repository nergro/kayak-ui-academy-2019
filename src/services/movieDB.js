import axios from 'axios';

export const imagePath = 'https://image.tmdb.org/t/p/w500';
export const apiKey = 'b8df29dc84006d6a763f0f6ad6dee2c5';
export const accessKey =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDlkMDEzZmMyYzYwNTZlMDE3NzAyODVjMDFiZDJhMSIsInN1YiI6IjVjYzc1MmEyYzNhMzY4MjBiNTg2NjRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yXdXgp6XChvqW9fyRq2HDcAaDznEHZWBJNstp7-Gm7I';

const moviesMemo = {};

export const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

/* AUTH */
export const getRequestToken = () =>
  axios
    .post(
      'https://api.themoviedb.org/4/auth/request_token',
      { redirect_to: 'http://localhost:3000/' },
      config(accessKey)
    )
    .then(res => res.data.request_token);

export const getAccessToken = requestToken =>
  axios
    .post('https://api.themoviedb.org/4/auth/access_token', { requestToken }, config(accessKey))
    .then(res => ({
      access_token: res.data.access_token,
      account_id: res.data.account_id
    }));

/* LISTS */

export const getLists = accountId => {
  let lists = {};
  return axios
    .get(`https://api.themoviedb.org/4/account/${accountId}/lists`, config(accessKey))
    .then(res => {
      lists = res.data.results;
      return getAllLists(res.data.results);
      // return res.data.results;
    })
    .then(res => ({
      lists,
      fetchedLists: res
    }));
};

export const getAllLists = lists => {
  const promises = lists.map(list => getList(list.id, 1).then(response => response));
  return Promise.all(promises);
};

export const getList = (listId, page) =>
  axios
    .get(
      `https://api.themoviedb.org/4/list/${listId}?page=${page}&api_key=${apiKey}`,
      config(accessKey)
    )
    .then(res => ({
      data: {
        id: res.data.id,
        items: res.data.total_results,
        rating: res.data.average_rating,
        runtime: res.data.runtime,
        revenue: res.data.revenue,
        totalPages: res.data.total_pages,
        movies: res.data.results,
        name: res.data.name,
        description: res.data.description,
        comments: res.data.comments
      }
    }));

export const createList = (title, description, accessToken) =>
  axios
    .post(
      'https://api.themoviedb.org/4/list',
      {
        name: title,
        iso_639_1: 'en',
        description
      },
      config(accessToken)
    )
    .then(res => res.data.id);

export const updateList = (title, description, accessToken, listId) =>
  axios
    .put(
      `https://api.themoviedb.org/4/list/${listId}`,
      {
        name: title,
        description
      },
      config(accessToken)
    )
    .then(res => res);

export const clearList = (listId, accessToken) =>
  axios
    .get(`https://api.themoviedb.org/4/list/${listId}/clear`, config(accessToken))
    .then(res => res);

export const deleteList = (listId, accessToken) =>
  axios.delete(`https://api.themoviedb.org/4/list/${listId}`, config(accessToken)).then(res => res);

/* Movies */
export const getMovies = query => {
  if (moviesMemo[query]) {
    return Promise.resolve(moviesMemo[query]);
  }

  return fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
  )
    .then(response => response.json())
    .then(({ results }) => {
      const slicedResults = results.slice(0, 8);
      moviesMemo[query] = slicedResults;
      return slicedResults;
    });
};

export const getGenres = () =>
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`).then(
    response => response.json()
  );

export const getMoviesList = ids => {
  const promises = ids.map(id =>
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`).then(
      response => response.json()
    )
  );

  return Promise.all(promises);
};

export const addCommentToMovie = (listId, accessToken, data) =>
  axios
    .put(`https://api.themoviedb.org/4/list/${listId}/items`, data, config(accessToken))
    .then(res => res);

const getMovieTemplate = movieId => ({
  items: [
    {
      media_type: 'movie',
      media_id: movieId
    }
  ]
});

export const addMovieToList = (listId, movieId, accessToken) =>
  axios
    .post(
      `https://api.themoviedb.org/4/list/${listId}/items`,
      getMovieTemplate(movieId),
      config(accessToken)
    )
    .then(res => res);

export const removeMovieFromList = (listId, movieId, accessToken) =>
  axios
    .delete(`https://api.themoviedb.org/4/list/${listId}/items`, {
      data: getMovieTemplate(movieId),
      ...config(accessToken)
    })
    .then(res => res);
