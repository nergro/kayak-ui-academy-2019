/* eslint-disable no-nested-ternary */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import ListForm from '../list-form';
import Spinner from '../UI/Spinner/Spinner';
import Error from '../UI/error';

class createList extends Component {
  state = {
    title: '',
    description: '',
    tooShort: false
  };
  onInputChange = (input, value) => {
    this.setState({
      [input]: value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    const { makeList } = this.props;
    const title = this.state.title;
    const description = this.state.description;
    if (title.length >= 3 && description.length >= 3) {
      makeList(title, description);
    } else {
      this.setState({
        tooShort: true
      });
    }
  };
  render() {
    const { loading, error, listPosted } = this.props;
    return (
      <div className="create-list">
        <h1>Create List</h1>
        {loading ? (
          <Spinner />
        ) : error ? (
          <Error>Sorry! Something went wrong :(</Error>
        ) : listPosted ? (
          <Redirect to="/lists" />
        ) : (
          <ListForm
            onSubmit={this.onSubmit}
            onChange={this.onInputChange}
            titleValue={this.state.title}
            descriptionValue={this.state.description}
            tooShort={this.state.tooShort}
          />
        )}
      </div>
    );
  }
}

export default createList;
