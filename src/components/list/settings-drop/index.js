import React, { Component } from 'react';

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
  render() {
    const { empty } = this.props;
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
                <button type="button">EDIT LIST</button>
              </li>
              {!empty ? (
                <li className="settings-list__item">
                  <button type="button">CLEAR LIST</button>
                </li>
              ) : null}
              <li className="settings-list__item">
                <button type="button">DELETE LIST</button>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

export default settings;
