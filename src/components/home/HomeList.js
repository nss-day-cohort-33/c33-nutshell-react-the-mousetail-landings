import React, { Component } from "react";
import TaskManager from "../modules/TaskManager"
import EventManager from "../modules/EventManager"

export default class HomeList extends Component {
  state={
    tasks: [],
    events: []
}

componentDidMount() {
    let userId = sessionStorage.getItem("userId")
    TaskManager.getTaskByUserID(userId).then(tasks => {this.setState({ tasks })})
    }

  render() {
    return (
      <React.Fragment>
        <section className="tasks">
          {this.state.tasks.map(task => (
            <div key={task.id} className="card">
              <div className="card-body">
                <div className="card-title">
                  <h5>{task.name}</h5>
                  <h5>{task.completionDate}</h5>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section className="events">
          {this.props.events.map(each =>
            <div key={each.id} className="event-card">
              <div className="event-card-body">
                <div className="event-card-title">
                  <h5>{each.title}</h5>
                    <h6>{each.date}</h6>
                      <p>{each.time}</p>
                        <h6>{each.location}</h6>
                         <button
                           onClick={() => this.props.deleteEvent(each.id)}
                          className="event-card-link">Delete</button>
                         <button
                           onClick={() => this.props.history.push(`/events/${each.id}/edit`)}
                           className="event-card-link">Edit</button>
               </div>
              </div>
            </div>
          )}
        </section>
        <section className="messages">
          {this.props.messages.map(message => (
            <div key={message.id} className="card">
              <div className="card-body">
                <div className="card-title">
                  <h5>{message.message}</h5>
                </div>
              </div>
            </div>
          ))}
        </section>
      </React.Fragment>
    );
  }
}
