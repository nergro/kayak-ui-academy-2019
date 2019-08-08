import React from 'react';
import Proptypes from 'prop-types';

const movie = ({ image, title, description, rating, comment, toggleModal, mediaType, id }) => {
  return (
    <div className="movie-box">
      <div className="movie-box-top">
        <img src={image} alt="Movie poster" />
      </div>
      <div className="movie-box-bottom">
        <h2>{title}</h2>
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
            </React.Fragment>
          ) : (
            <button
              type="button"
              className="custom-button"
              onClick={() => toggleModal(mediaType, id)}
              style={{ fontSize: '1.3rem' }}
            >
              ADD COMMENT
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

movie.propTypes = {
  image: Proptypes.string.isRequired,
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  rating: Proptypes.number.isRequired,
  comment: Proptypes.string,
  toggleModal: Proptypes.func.isRequired,
  mediaType: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired
};

movie.defaultProps = {
  comment: null
};

export default movie;
