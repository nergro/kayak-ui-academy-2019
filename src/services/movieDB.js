import axios from 'axios';

const apiKey = 'cab2afe8b43cf5386e374c47aeef4fca';
const accessKey =
  'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMDlkMDEzZmMyYzYwNTZlMDE3NzAyODVjMDFiZDJhMSIsInN1YiI6IjVjYzc1MmEyYzNhMzY4MjBiNTg2NjRkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yXdXgp6XChvqW9fyRq2HDcAaDznEHZWBJNstp7-Gm7I';

const moviesMemo = {};

export const config = token => ({
  headers: {
    Authorization: `Bearer ${token}`
  }
});

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
    .post(
      'https://api.themoviedb.org/4/auth/access_token',
      { request_token: request_token },
      config(accessKey)
    )
    .then(res => {
      return res.data.access_token;
    });
};

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
