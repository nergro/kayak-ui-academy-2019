import { hot } from 'react-hot-loader/root';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import HeaderWrapper from '../header-wrapper';

import Navbar from '../navbar';
import Autocomplete from '../autocomplete';
import Footer from '../footer';
import Spinner from '../UI/Spinner/Spinner';

import Home from '../home';
import Lists from '../lists';

import styles from './app.scss';
import '../../client/movies/index.scss';

class App extends Component {
  componentDidMount() {
    const { checkUser } = this.props;
    checkUser();
  }

  render() {
    const { loading } = this.props;
    console.log(this.props);
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

            <div className="page-content container">
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/lists" exact component={Lists} />
              </Switch>
            </div>
            <Footer />
          </React.Fragment>
        )}
      </div>
    );
  }
}

App.prototypes = {
  loading: PropTypes.bool.isRequired,
  checkUser: PropTypes.func.isRequired
};

export default hot(App);
