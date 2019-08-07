/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Proptypes from 'prop-types';
import Backdrop from '../backdrop';

class ModalForm extends Component {
  state = {
    comment: '',
    tooShort: false
  };
  onSubmit = e => {
    const { submitComment } = this.props;
    if (!this.state.comment.length >= 3) {
      e.preventDefault();
      this.setState({
        tooShort: true
      });
    } else {
      submitComment(this.state.comment);
    }
  };
  render() {
    const { show, onBackdropClick } = this.props;
    return (
      <React.Fragment>
        <Backdrop show={show} clicked={onBackdropClick} />
        <div
          className="modal"
          style={{
            transform: show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: show ? '1' : '0'
          }}
        >
          <h1>ADD COMMENT</h1>
          <form className="modal-form" onSubmit={this.onSubmit}>
            <div className="form-control">
              <textarea
                type="text"
                name="description-one"
                placeholder="Comment"
                spellCheck="false"
                value={this.state.comment}
                onChange={e => this.setState({ comment: e.target.value })}
                rows="3"
                required
              />
            </div>
            <div className="modal-form-bottom">
              {this.state.tooShort ? (
                <p className="form-error">Make sure comment is at least 3 characters long</p>
              ) : null}
              <button type="submit" className="form-button">
                PUBLISH
              </button>
            </div>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

ModalForm.propTypes = {
  show: Proptypes.bool.isRequired,
  onBackdropClick: Proptypes.func.isRequired,
  submitComment: Proptypes.func.isRequired
};

export default withRouter(ModalForm);
