import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import List from './list';
import { addComment, removeMovie } from '../../actions/lists';

describe('List component: ', () => {
  const initialState = {
    list: {
      comments: {
        'movie:12444': null,
        'movie:384018': null
      },
      description: 'Actions movies that I like',
      id: 118689,
      items: 0,
      movies: [],
      name: 'Action',
      rating: 7.166,
      revenue: 954305868,
      runtime: 282,
      totalPages: 1
    },
    loading: false
  };
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <BrowserRouter>
        <List
          addComment={addComment}
          removeMovie={removeMovie}
          loading={initialState.loading}
          list={initialState.list}
        />
      </BrowserRouter>
    );
  });

  it('should render', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have proper list headline', () => {
    expect(wrapper.find('.list-title h1').equals(<h1>Action</h1>)).toEqual(true);
  });

  it('should write error message in empty list', () => {
    expect(wrapper.exists('.error-message')).toEqual(true);
  });
});
