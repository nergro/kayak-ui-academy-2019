import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import Proptypes from 'prop-types';

class settings extends Component {
  state = {
    showSettings: false
  };
  settingsClicked = () => {
    this.setState(() => {
      return {
        showSettings: !this.state.showSettings
      };
    });
  };

  warning = (e, msg) => {
    if (!window.confirm(msg)) {
      e.preventDefault();
    }
  };

  render() {
    const { empty, match } = this.props;
    const listId = match.params.id;
    const editUrl = '/list/' + listId + '/edit';
    const clearUrl = '/list/' + listId + '/clear';
    const deleteUrl = '/list/' + listId + '/delete';
    return (
      <div className="settings-wrapper">
        <button
          type="button"
          className="list-info__item list-settings"
          onClick={this.settingsClicked}
        >
          Settings
        </button>
        {this.state.showSettings ? (
          <div className="settings">
            <div className="settings__arrow-up" />
            <ul className="settings__list">
              <li className="settings-list__item">
                <Link to={editUrl}>EDIT LIST</Link>
              </li>

              {!empty ? (
                <li className="settings-list__item">
                  <Link
                    to={clearUrl}
                    onClick={e => this.warning(e, 'Do You really want to CLEAR this list?')}
                  >
                    CLEAR LIST
                  </Link>
                </li>
              ) : null}
              <li className="settings-list__item">
                <Link
                  to={deleteUrl}
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
settings.propTypes = {
  empty: Proptypes.bool,
  listId: Proptypes.string.isRequired
};

settings.defaultProps = {
  empty: false
};

export default withRouter(settings);
