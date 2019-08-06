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
export const getRequestToken = () => {
  return axios
    .post(
      'https://api.themoviedb.org/4/auth/request_token',
      { redirect_to: 'http://localhost:3000/' },
      config(accessKey)
    )
    .then(res => {
      return res.data.request_token;
    });
};

export const getAccessToken = request_token => {
  return axios
    .post('https://api.themoviedb.org/4/auth/access_token', { request_token }, config(accessKey))
    .then(res => {
      return {
        access_token: res.data.access_token,
        account_id: res.data.account_id
      };
    });
};

/* LISTS */

export const getLists = accountId => {
  return axios
    .get(`https://api.themoviedb.org/4/account/${accountId}/lists`, config(accessKey))
    .then(res => {
      return res.data.results;
    });
};

export const getList = (listId, page) => {
  return axios
    .get(
      `https://api.themoviedb.org/4/list/${listId}?page=${page}&api_key=${apiKey}`,
      config(accessKey)
    )
    .then(res => {
      return {
        data: {
          items: res.data.total_results,
          rating: res.data.average_rating,
          runtime: res.data.runtime,
          revenue: res.data.revenue,
          totalPages: res.data.total_pages,
          movies: res.data.results,
          name: res.data.name,
          description: res.data.description
        }
      };
    });
};

export const createList = (title, description, accessToken) => {
  const data = {
    name: title,
    iso_639_1: 'en',
    description
  };
  return axios.post('https://api.themoviedb.org/4/list', data, config(accessToken)).then(res => {
    return res.data.id;
  });
};

export const updateList = (title, description, accessToken, listId) => {
  const data = {
    name: title,
    description
  };
  return axios
    .put(`https://api.themoviedb.org/4/list/${listId}`, data, config(accessToken))
    .then(res => {
      return res.data.success;
    });
};

export const clearList = (listId, accessToken) => {
  return axios
    .get(`https://api.themoviedb.org/4/list/${listId}/clear`, config(accessToken))
    .then(res => {
      return res.data.success;
    });
};

export const deleteList = (listId, accessToken) => {
  return axios
    .delete(`https://api.themoviedb.org/4/list/${listId}`, config(accessToken))
    .then(res => {
      return res.data.success;
    });
};

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
