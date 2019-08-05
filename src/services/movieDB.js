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
      return {
        access_token: res.data.access_token,
        account_id: res.data.account_id
      };
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
