import React from 'react';
import { mount } from 'enzyme';
import ListMovies from './index';

describe('List-movies component: ', () => {
  const movies = [
    {
      adult: false,
      backdrop_path: '/8RKBHHRqOMOLh5qW3sS6TSFTd8h.jpg',
      genre_ids: [28, 878, 53, 12],
      id: 399579,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Alita: Battle Angel',
      overview:
        'When Alita awakens with no memory of who she is in a future world she does not recognize, she is taken in by Ido, a compassionate doctor who realizes that somewhere in this abandoned cyborg shell is the heart and soul of a young woman with an extraordinary past.',
      popularity: 106.747,
      poster_path: '/xRWht48C2V8XNfzvPehyClOvDni.jpg',
      release_date: '2019-01-31',
      title: 'Alita: Battle Angel',
      video: false,
      vote_average: 6.8,
      vote_count: 3053
    },
    {
      adult: false,
      backdrop_path: '/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg',
      genre_ids: [28, 12, 878],
      id: 299537,
      media_type: 'movie',
      original_language: 'en',
      original_title: 'Captain Marvel',
      overview:
        'The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.',
      popularity: 81.966,
      poster_path: '/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg',
      release_date: '2019-03-06',
      title: 'Captain Marvel',
      video: false,
      vote_average: 7,
      vote_count: 6772
    }
  ];
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<ListMovies movies={movies} />);
  });

  it('should render', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should render all movies', () => {
    expect(wrapper.find('.movie-box').length).toEqual(movies.length);
  });
});
