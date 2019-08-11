import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class ListSettings extends Component {
  state = {
    showSettings: false
  };
  settingsClicked = () => {
    this.setState(prevState => ({ showSettings: !prevState.showSettings }));
  };

  warning = (e, msg) => {
    if (!window.confirm(msg)) {
      e.preventDefault();
    }
  };

  render() {
    const { empty, match } = this.props;
    const listId = match.params.id;
    return (
      <div className="settings-wrapper">
        <button
          type="button"
          className="list-info__item list-settings__button"
          onClick={this.settingsClicked}
        >
          Settings
        </button>
        {this.state.showSettings ? (
          <div className="settings">
            <div className="settings__arrow-up" />
            <ul className="settings__list">
              <li className="settings__list--item">
                <Link to={`/list/${listId}/edit`}>EDIT LIST</Link>
              </li>
              {!empty ? (
                <li className="settings__list--item">
                  <Link
                    to={`/list/${listId}/clear`}
                    onClick={e => this.warning(e, 'Do You really want to CLEAR this list?')}
                  >
                    CLEAR LIST
                  </Link>
                </li>
              ) : null}
              <li className="settings__list--item">
                <Link
                  to={`/list/${listId}/delete`}
                  onClick={e => this.warning(e, 'Do You really want to DELETE this list?')}
                >
                  DELETE LIST
                </Link>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}
ListSettings.propTypes = {
  empty: Proptypes.bool,
  match: Proptypes.object.isRequired
};

ListSettings.defaultProps = {
  empty: false
};

export default withRouter(ListSettings);
