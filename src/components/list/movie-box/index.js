import React from 'react';
import Proptypes from 'prop-types';
import { withRouter } from 'react-router-dom';

const movie = ({
  image,
  title,
  description,
  rating,
  comment,
  toggleModal,
  mediaType,
  id,
  date,
  removeMovie,
  listId,
  history
}) => {
  return (
    <div className="movie-box">
      {image ? (
        <div className="movie-box-top">
          <img src={image} alt="Movie poster" />
        </div>
      ) : null}
      <div className="movie-box-bottom">
        <h2>{title}</h2>
        <h5>{date}</h5>
        {rating ? (
          <h3>
            <i className="fas fa-star" />
            {rating}
            <i className="fas fa-star" />
          </h3>
        ) : null}
        <p>{description}</p>
        <div className="movie-box-bottom__comment">
          {comment ? (
            <React.Fragment>
              <p>{comment}</p>
              <span className="movie-box-bottom__comment--edit">
                <i className="fas fa-pencil-alt" onClick={() => toggleModal(mediaType, id)} />
              </span>
              <span className="movie-box__remove">
                <i className="fas fa-times fa-2x" onClick={() => removeMovie(id)} />
              </span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <button
                type="button"
                className="custom-button"
                onClick={() => toggleModal(mediaType, id)}
                style={{ fontSize: '1.3rem' }}
              >
                ADD COMMENT
              </button>
              <span className="movie-box__remove">
                <i className="fas fa-times fa-2x" onClick={() => removeMovie(id)} />
              </span>
            </React.Fragment>
          )}
        </div>
      </div>
    </div>
  );
};

movie.propTypes = {
  // image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired,
  comment: Proptypes.string,
  toggleModal: Proptypes.func.isRequired,
  mediaType: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired
  // date: Proptypes.string.isRequired
};

movie.defaultProps = {
  comment: null
};

export default withRouter(movie);
