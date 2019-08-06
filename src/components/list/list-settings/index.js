import React, { Component } from 'react';
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

  warning = e => {
    if (!window.confirm('Do You really want to clear this list?')) {
      e.preventDefault();
    }
  };

  render() {
    const { empty, listId } = this.props;
    const editUrl = '/list/' + listId + '/edit';
    const clearUrl = '/list/' + listId + '/clear';
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
                <a href={editUrl}>EDIT LIST</a>
              </li>
              {!empty ? (
                <li className="settings-list__item">
                  <a href={clearUrl} onClick={this.warning}>
                    CLEAR LIST
                  </a>
                </li>
              ) : null}
              <li className="settings-list__item">
                <a href={editUrl}>DELETE LIST</a>
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

export default settings;
