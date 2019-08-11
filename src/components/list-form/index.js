import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';

class ListForm extends Component {
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
    const {
      makeList,
      updateList,
      match,
      history: { push }
    } = this.props;
    const listId = match.params.id;
    const title = this.state.title;
    const description = this.state.description;
    if (title.length >= 3 && description.length >= 3) {
      if (!this.state.createList && updateList) {
        updateList(title, description, listId).then(() => push(`/list/${listId}/1`));
      } else {
        makeList(title, description).then(() => push('/lists'));
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
            name="title"
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
            name="description"
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

ListForm.propTypes = {
  title: Proptypes.string,
  description: Proptypes.string,
  makeList: Proptypes.func,
  updateList: Proptypes.func,
  match: Proptypes.object.isRequired,
  history: Proptypes.shape({
    push: Proptypes.func.isRequired
  }).isRequired
};

ListForm.defaultProps = {
  makeList: null,
  updateList: null,
  title: '',
  description: ''
};

export default withRouter(ListForm);
