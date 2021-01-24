import React from "react";
import { DEFAULT_NOTIFICATION_COMPONENT } from "../constants/index";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { store } from 'react-notifications-component';

export default class Option extends React.Component {
  constructor(props) {
    super(props);
    this.handleCopyText = this.handleCopyText.bind(this);
  }
  handleCopyText() {
    this._copyTextToClipboard(this.props.optionText);
    this._addCopyNotification(this.props.optionText);
  }
  _copyTextToClipboard(text) {
    let copyFrom = document.createElement("textarea");
    copyFrom.textContent = text;

    let bodyElm = document.getElementsByTagName("body")[0];
    bodyElm.appendChild(copyFrom);

    copyFrom.select();
    let retVal = document.execCommand('copy');
    bodyElm.removeChild(copyFrom);
    return retVal;
  }
  _addCopyNotification(text) {
    store.addNotification(Object.assign(
      { message: `the option text "${this.props.optionText}" copied!` },
      DEFAULT_NOTIFICATION_COMPONENT
    ));
  }
  render() {
    return (
      <div className="option">
        <p className="option__text" id={this.props.count + '-' + this.props.optionText}>
          {this.props.count}. {this.props.optionText}
        </p>
        <div>
          <FontAwesomeIcon
            className="button--copy"
            icon={['fas', 'copy']}
            onClick={this.handleCopyText}
          />
          <button
            className="button button--link"
            onClick={e => {
              this.props.handleDeleteOption(this.props.optionText);
            }}
          >
            remove
        </button>
        </div>
      </div>
    );
  }
}