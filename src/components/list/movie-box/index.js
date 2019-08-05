import React from 'react';

const movie = props => {
  return (
    <div className="movie-box">
      <img src={props.image} />
    </div>
  );
};

export default movie;
