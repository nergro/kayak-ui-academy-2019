import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { mount } from 'enzyme';
import Lists from './lists-container';
import configureStore from 'redux-mock-store';

describe('Lists component: ', () => {
  const initialState = {
    lists: {
      lists: [
        {
          account_object_id: '.....',
          adult: 0,
          average_rating: 0,
          created_at: '2019-08-11 10:53:18',
          description: 'Action movies that I like',
          featured: 0,
          id: 118858,
          iso_639_1: 'en',
          iso_3166_1: 'US',
          name: 'Action',
          number_of_items: 10,
          public: 1,
          revenue: '0',
          runtime: 0,
          sort_by: 1,
          updated_at: '2019-08-11 10:53:18'
        },
        {
          account_object_id: '.....',
          adult: 0,
          average_rating: 0,
          created_at: '2019-08-12 10:53:18',
          description: 'Sci-fi movies that I like',
          featured: 0,
          id: 118859,
          iso_639_1: 'en',
          iso_3166_1: 'US',
          name: 'Sci-fi',
          number_of_items: 5,
          public: 1,
          revenue: '0',
          runtime: 0,
          sort_by: 1,
          updated_at: '2019-08-12 10:53:18'
        }
      ],
      loading: false
    }
  };

  let wrapper;
  const mockStore = configureStore([]);

  beforeEach(() => {
    const store = mockStore(initialState);
    wrapper = mount(
      <Provider store={store}>
        <BrowserRouter>
          <Lists />
        </BrowserRouter>
      </Provider>
    );
  });

  it('should render', () => {
    expect(wrapper.length).toEqual(1);
  });

  it('should have proper headline', () => {
    expect(wrapper.find('.lists-container__title').text()).toEqual('LISTS');
  });

  it('should render all lists', () => {
    expect(wrapper.find('.lists-wrapper .list-box').length).toEqual(
      initialState.lists.lists.length
    );
  });
});
