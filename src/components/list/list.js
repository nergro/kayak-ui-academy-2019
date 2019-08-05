import React, { Component } from 'react';
import Movie from './movie-box';
import Paginator from '../UI/paginator/paginator';

// eslint-disable-next-line react/prefer-stateless-function
class List extends Component {
  render() {
    return (
      <div className="list">
        <div className="list-title">
          <h1>LIST TITLE</h1>
          <p>Some description about list</p>
        </div>
        <div className="list-info">
          <div className="list-info__item list-info__items-count">
            <h2>5</h2>
            <p>ITEMS ON THIS LIST</p>
          </div>
          <div className="list-info__item list-info__rating">
            <h2>6.85</h2>
            <p>AVERAGE RATING</p>
          </div>
          <div className="list-info__item list-info__runtime">
            <h2>4H 11M</h2>
            <p>TOTAL RUNTIME</p>
          </div>
          <div className="list-info__item list-info__revenue">
            <h2>$ 2B</h2>
            <p>TOTAL REVENUE</p>
          </div>
        </div>
        <div className="list-movies">
          <Paginator />
          <div className="list-movies__movies">
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
            <Movie image="https://image.tmdb.org/t/p/w500/keym7MPn1icW1wWfzMnW3HeuzWU.jpg" />
          </div>
          <Paginator />
        </div>
      </div>
    );
  }
}

export default List;
