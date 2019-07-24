import React, { Component } from "react";

export default class HomeList extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="tasks">
          {this.props.tasks.map(task => (
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
                    <div key={each.username} className="event-card">
                        <div className="event-card-body">
                            <div className="event-card-title">
                                {/* <img src={dog} className="icon--dog" /> */}
                                <h5>{each.title}</h5>
                                <h6>{each.date}</h6>
                                <p>{each.time}</p>
                                <h6>{each.location}</h6>
                                <button
                                    onClick={() => this.props.deleteEvent(each.id)}
                                    className="event-card-link">Delete</button>
                                    <button
                                    onClick={() => this.props.editEvent(each.id)}
                                    className="event-card-link">Edit</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
      </React.Fragment>
    );
  }
}
