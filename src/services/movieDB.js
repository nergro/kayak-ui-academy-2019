const apiKey = 'cab2afe8b43cf5386e374c47aeef4fca';

export const getMovies = query =>
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}`
  ).then(response => response.json());

export const getGenres = () =>
  fetch(`https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`).then(
    response => response.json()
  );
