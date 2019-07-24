import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import Message from "./MessageIcon.svg";
// import "./Message.css";

export default class MessageCard extends Component {
  render() {
    return (
      <React.Fragment>
        <div>
        {this.props.message.message}
        </div>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            this.props.history.push(`/messages/${this.props.message.id}/edit`);
          }}
        >
          Edit
        </button>
        <a
          href="#"
          onClick={() => this.props.deleteMessage(this.props.message.id)}
          className="card-link"
        >
          Delete Message
        </a>
      </React.Fragment>
    );
  }
}
