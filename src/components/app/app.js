import { hot } from 'react-hot-loader/root';

import React, { Component } from 'react';
import { Switch, Route, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderWrapper from '../header-wrapper';

import Navbar from '../navbar';
import Autocomplete from '../autocomplete';
import Footer from '../footer';
import Spinner from '../UI/Spinner/Spinner';

import Home from '../home';
import Lists from '../lists';
import List from '../list';
import CreateList from '../create-list';
import UpdateList from '../update-list';
import notFound from '../404';

import styles from './app.scss';
import '../../client/movies/index.scss';

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props;
    checkUser();
  }

  render() {
    const { loading } = this.props;
    return (
      <div className={styles.container}>
        {loading ? (
          <Spinner />
        ) : (
          <React.Fragment>
            <Navbar />
            <HeaderWrapper>
              <Autocomplete />
            </HeaderWrapper>

            <div className="page-content">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/lists" component={Lists} />
                <Route path="/list/create" component={CreateList} />
                <Route path="/list/:id/edit" component={UpdateList} />
                <Route path="/list/:id/:page" component={List} />
                <Route component={notFound} />
              </Switch>
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
  checkUser: PropTypes.func.isRequired
};

export default withRouter(hot(App));
