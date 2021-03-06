import { hot } from 'react-hot-loader/root';

import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderWrapper from '../header-wrapper';

import Navbar from '../navbar';
import Autocomplete from '../autocomplete';
import Footer from '../footer';
import Spinner from '../UI/Spinner';

import Home from '../home';
import Lists from '../lists';
import List from '../list';
import CreateList from '../create-list';
import UpdateList from '../update-list';
import ClearDeleteList from '../clear-list';
import Error from '../UI/error';

import '../../client/movies/index.scss';

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props;
    checkUser();
  }

  render() {
    const { loading, isAuth } = this.props;
    return (
      <div className="page-wrapper">
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <Navbar />
            <HeaderWrapper>
              <Autocomplete />
            </HeaderWrapper>

            <div className="page-content">
              {isAuth ? (
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route path="/lists" component={Lists} />
                  <Route path="/list/create" component={CreateList} />
                  <Route path="/list/:id/edit" component={UpdateList} />
                  <Route path="/list/:id/clear" component={ClearDeleteList} />
                  <Route path="/list/:id/delete" component={ClearDeleteList} />
                  <Route path="/list/:id/:page" component={List} />
                  <Route render={() => <Error>404. Page not found.</Error>} />
                </Switch>
              ) : (
                <Switch>
                  <Route path="/" exact component={Home} />
                  <Route render={() => <Error>404. Page not found.</Error>} />
                </Switch>
              )}
            </div>
            <Footer />
          </React.Fragment>
        )}
      </div>
    );
  }
}

App.propTypes = {
  loading: PropTypes.bool.isRequired,
  checkUser: PropTypes.func.isRequired,
  isAuth: PropTypes.bool.isRequired
};

export default withRouter(hot(App));
