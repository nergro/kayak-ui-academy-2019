import React from 'react';
import Proptypes from 'prop-types';
import { imagePath } from '../../../services/movieDB';

const MovieBox = ({ comment, toggleModal, removeMovie, movie }) => {
  const descArr = movie.overview ? movie.overview.split('.') : [];
  const description = descArr.length > 2 ? descArr.slice(0, 2).join() : descArr.join();
  const image = movie.backdrop_path ? imagePath + movie.backdrop_path : null;
  return (
    <div className="movie-box">
      {image ? (
        <div className="movie-box-top">
          <img src={image} alt="Movie poster" />
        </div>
      ) : null}
      <div className="movie-box-bottom">
        <h2>{movie.name ? movie.name : movie.title}</h2>
        <h5>{movie.release_date}</h5>
        {movie.vote_average ? (
          <h3>
            <i className="fas fa-star" />
            {movie.vote_average}
            <i className="fas fa-star" />
          </h3>
        ) : null}
        <p>{description}</p>
        <div className="movie-box-bottom__comment">
          {comment ? (
            <React.Fragment>
              <p>{comment}</p>
              <span className="movie-box-bottom__comment--edit">
                <i className="fas fa-pencil-alt" onClick={() => toggleModal(movie.id)} />
              </span>
              <span className="movie-box-bottom__comment--remove">
                <i className="fas fa-times fa-2x" onClick={() => removeMovie(movie.id)} />
              </span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <button
                type="button"
                className="custom-button"
                onClick={() => toggleModal(movie.id)}
                style={{ fontSize: '1.3rem' }}
              >
                ADD COMMENT
              </button>
              <span className="movie-box-bottom__comment--remove">
                <i className="fas fa-times fa-2x" onClick={() => removeMovie(movie.id)} />
              </span>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

MovieBox.propTypes = {
  comment: Proptypes.string,
  toggleModal: Proptypes.func.isRequired,
  removeMovie: Proptypes.func.isRequired,
  movie: Proptypes.object.isRequired
};

MovieBox.defaultProps = {
  comment: null
};

export default MovieBox;
