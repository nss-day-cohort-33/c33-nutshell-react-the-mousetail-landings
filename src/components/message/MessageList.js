import React, { Component } from "react";
import "./Message.css";
import MessageCard from "./MessageCard";

export default class MessageList extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="messageButton">
          <button
            type="button"
            className="btn btn-success"
            onClick={() => {
              this.props.history.push("/messages/new");
            }}
          >
            Create New Message
          </button>
        </div>
        <section className="messages">
          {this.props.messages.map(message => (
            <MessageCard key={message.id} message={message} {...this.props} />
          ))}
        </section>
      </React.Fragment>
    );
  }
}