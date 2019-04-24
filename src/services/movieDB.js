const apiKey = 'cab2afe8b43cf5386e374c47aeef4fca';

const moviesMemo = {};

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
