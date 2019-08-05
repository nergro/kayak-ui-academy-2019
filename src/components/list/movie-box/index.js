import React from 'react';
import Proptypes from 'prop-types';

const movie = props => {
  return (
    <div className="movie-box">
      <img src={props.image} alt="Movie poster" />
    </div>
  );
};

movie.propTypes = {
  image: Proptypes.string.isRequired
};

export default movie;
