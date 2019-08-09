/* eslint-disable no-nested-ternary */
const getSortedList = (movies, sortBy) => {
  if (movies.length > 0) {
    switch (sortBy) {
      case 'RATING_ASC':
        return movies.slice(0).sort((a, b) => a.vote_average - b.vote_average);
      case 'RATING_DESC':
        return movies.slice(0).sort((a, b) => b.vote_average - a.vote_average);
      case 'DATE_ASC':
        return movies.slice(0).sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
      case 'DATE_DESC':
        return movies.slice(0).sort((a, b) => new Date(b.release_date) - new Date(a.release_date));
      case 'TITLE_DESC':
        return movies
          .slice(0)
          .sort((a, b) =>
            a.title.toUpperCase() < b.title.toUpperCase()
              ? 1
              : b.title.toUpperCase() < a.title.toUpperCase()
              ? -1
              : 0
          );
      default:
        return movies
          .slice(0)
          .sort((a, b) =>
            a.title.toUpperCase() > b.title.toUpperCase()
              ? 1
              : b.title.toUpperCase() > a.title.toUpperCase()
              ? -1
              : 0
          );
    }
  }
  return [];
};

export default getSortedList;
