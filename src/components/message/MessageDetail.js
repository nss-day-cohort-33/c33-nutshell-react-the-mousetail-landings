import React, { Component } from "react";
import "./Message.css";
import chat from "./MessageIcon.htm";

export default class MessageDetail extends Component {
  state = {
    saveDisabled: false
  };

  render() {
    return (
      <section className="message">
        <div key={this.props.message.id} className="card">
          <div className="card-body">
            <h4 className="card-title">
              <img src={chat} alt="message" className="icon--message" />
              {this.props.message.name}
            </h4>
            {/* <h6 className="card-title">{this.props.message.breed}</h6> */}
            <button
              onClick={() => {
                this.setState({ saveDisabled: true }, () =>
                  this.props.deleteMessage(this.props.message.id)
                );
              }}
              disabled={this.state.saveDisabled}
              className="card-link"
            >
              Delete
            </button>
          </div>
        </div>
      </section>
    );
  }
}