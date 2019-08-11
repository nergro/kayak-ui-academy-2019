import request from 'supertest';
import { accessKey, getMoviesList } from './movieDB';

const URL = 'https://api.themoviedb.org/4';

describe('Movie DB API', () => {
  describe('getRequestToken', () => {
    it('Request token should respond with 200 status', async () => {
      const res = await request(URL)
        .post('/auth/request_token')
        .set('Authorization', `Bearer ${accessKey}`);
      expect(res.statusCode).toBe(200);
    });
  });

  describe('getMovies', () => {
    const moviesIds = [984, 671];
    let res;
    it('should be defined', async () => {
      res = await getMoviesList(moviesIds);
      expect(res).toBeDefined();
    });

    it('should contain valid data', () => {
      const errors = [];
      res.forEach((movie, i) => {
        if (!movie.id) {
          return errors.push(`Movie at index ${i} don't have an id`);
        }
        if (!movie.title) {
          return errors.push(`Movie at index ${i} dont't have a title`);
        }
        if (!movie.overview) {
          return errors.push(`Movie at index ${i} dont't have an overview`);
        }
        if (Number.isNaN(movie.revenue)) {
          return errors.push(`Revenue at index ${i} is not a number`);
        }
      });
      expect(errors).toEqual([]);
    });
    it('should contain all movies', () => {
      expect(res.length).toEqual(moviesIds.length);
    });
  });
});
