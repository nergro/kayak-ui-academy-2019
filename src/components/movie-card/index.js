import React from 'react';

const MovieCard = () => (
  <div>
    <div className="mb-30">
      <h3>Selected Movie</h3>
    </div>
    <article className="card mb-30">
      <div className="card__header">
        <div className="asset-meta">7.7 / 37.155 / 11135</div>
        <h2 className="asset-title">Harry Potter and the Chamber of Secrets</h2>
      </div>
      <div className="card__body">
        <div className="asset-meta">2002-11-13</div>
        <div className="asset-meta">Original title: Harry Potter and the Chamber of Secrets</div>
        <div className="asset-meta">Original language: EN</div>
        <div className="asset-description">Cool description</div>
        <button type="button" className="button mt-30">
          Add to list
        </button>
      </div>
      <div className="card__thumbnail">
        <img
          className="asset-poster"
          src="https://via.placeholder.com/500x750?text=POSTER+IMAGE"
          alt="Harry Potter and the Chamber of Secrets movie poster"
        />
      </div>
    </article>
  </div>
);

export default MovieCard;
