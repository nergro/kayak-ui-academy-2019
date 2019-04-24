import React from 'react';

const GenresList = ({ ids, genres }) => {
  const matchedGenres = ids.map(id => genres[id]).filter(d => !!d);

  return matchedGenres.map(genre => (
    <span style={{ marginRight: 3 }} key={genre.name}>
      {genre.name}
    </span>
  ));
};

export default GenresList;
