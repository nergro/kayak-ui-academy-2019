/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import ListForm from '../list-form';

class createList extends Component {
  state = {
    title: 'ttt',
    description: 'ddd'
  };
  onInputChange = (input, value) => {
    this.setState({
      [input]: value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    console.log('SUBMITED');
  };
  render() {
    return (
      <div className="create-list">
        <h1>Create List</h1>
        <ListForm
          onSubmit={this.onSubmit}
          onChange={this.onInputChange}
          titleValue={this.state.title}
          descriptionValue={this.state.description}
        />
      </div>
    );
  }
}

export default createList;
