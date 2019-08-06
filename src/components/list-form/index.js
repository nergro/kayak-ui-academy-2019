/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Proptypes from 'prop-types';

class listForm extends Component {
  state = {
    title: '',
    description: '',
    tooShort: false,
    createList: true
  };
  componentDidMount() {
    const { title, description } = this.props;
    if (title && description) {
      this.setState({
        title,
        description,
        createList: false
      });
    }
  }
  onInputChange = (input, value) => {
    this.setState({
      [input]: value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    const { makeList, updateList, listId } = this.props;
    const title = this.state.title;
    const description = this.state.description;
    if (title.length >= 3 && description.length >= 3) {
      if (!this.state.createList && updateList && listId) {
        updateList(title, description, listId);
      } else {
        makeList(title, description);
      }
    } else {
      this.setState({
        tooShort: true
      });
    }
  };
  render() {
    return (
      <form className="create-list-form" onSubmit={this.onSubmit}>
        <div className="form-control">
          <input
            type="text"
            name="title-one"
            autoComplete="off"
            placeholder="List title"
            spellCheck="false"
            value={this.state.title}
            onChange={e => this.onInputChange('title', e.target.value)}
            required
          />
        </div>
        <div className="form-control">
          <textarea
            type="text"
            name="description-one"
            placeholder="Description"
            spellCheck="false"
            value={this.state.description}
            onChange={e => this.onInputChange('description', e.target.value)}
            rows="4"
            required
          />
        </div>
        {this.state.tooShort ? (
          <p className="form-error">
            Make sure title and description is at least 3 characters long
          </p>
        ) : null}
        <button type="submit" className="form-button">
          PUBLISH
        </button>
      </form>
    );
  }
}

listForm.propTypes = {
  title: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  makeList: Proptypes.func,
  updateList: Proptypes.func,
  listId: Proptypes
};

listForm.defaultProps = {
  makeList: null,
  updateList: null,
  listId: ''
};

export default listForm;
