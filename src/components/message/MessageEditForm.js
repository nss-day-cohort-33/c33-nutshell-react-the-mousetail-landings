import React, { Component } from "react";
import MessageManager from "./modules/MessageManager";
// import "./Message.css";

export default class MessageEditForm extends Component {
  state = {
    userName: "",
    message: ""
  };

  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  updateExistingMessage = evt => {
    evt.preventDefault();
    const editedMessage = {
      // username: sessionStorage.getItem("credentials"),
      id: this.props.match.params.messageId,
      userName: this.state.userName,
      message: this.state.message
    };

    this.props
      .updateMessage(editedMessage)
      .then(() => this.props.history.push("/messages"));
  };

  componentDidMount() {
    MessageManager.getMessage(this.props.match.params.messageId).then(
      message => {
        this.setState({
          userName: message.userName,
          message: message
        });
      }
    );
  }

  render() {
    return (
      <React.Fragment>
        <form className="MessageEditForm">
          <div className="MessageEdit">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="message"
            />
          </div>
          <button
            type="save"
            onClick={this.updateExistingMessage}
            className="btn btn-primary MessageEditButton"
          >
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}
