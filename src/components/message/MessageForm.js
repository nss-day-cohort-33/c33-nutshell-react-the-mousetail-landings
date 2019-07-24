// import { Route } from "react-router-dom";
import React, { Component } from "react";
// import MessageManager from "./MessageManager";

export default class MessageForm extends Component {
  // Set initial state of how the new layout will look and store in database
  state = {
    // userName: "",
    messageName: "",
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating message object, and
        invoking the function reference passed from parent component
     */
  constructNewMessage = evt => {
    evt.preventDefault();
    if (this.state.message === null) {
    window.alert("Please enter a message");
    } else {
    const message = {
    //  userName: sessionStorage.getItem("credentials"),
      message: this.state.messageName,
      // userName: this.state.userName,
      // Make sure the userId is saved to the database as a number since it is a foreign key.
      userId: parseInt(this.state.userId)
    };
    // Create the message and redirect user to message list
    this.props
      .addMessage(message)
      .then(() => this.props.history.push("/messages"));
}
  };

  //   addMessage = message =>
  //     MessageManager.post(message)
  //       .then(() => MessageManager.getAll())
  //       .then(messages =>
  //         this.setState({
  //           messages: messages
  //         })
  //       )
  //       .then(() => this.props.history.push("/messages"));

  render() {
    return (
      <React.Fragment>
        <form className="MessageForm">
          <div className="form-group">
            <label htmlFor="messageName"> Messages</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="messageName"
              placeholder="Enter Messsage Here"
            />
          </div>
          <button
            type="save"
            onClick={this.constructNewMessage}
            className="btn btn-primary"
          >
            Save
          </button>
        </form>
      </React.Fragment>
    );
  }
}
