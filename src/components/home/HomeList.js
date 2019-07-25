import React, { Component } from "react";
import TaskManager from "../modules/TaskManager"

export default class HomeList extends Component {
  state={
    tasks: []
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
        {/* <section className="events">
          {this.props.events.map(event => (
            <div key={event.id} className="card">
              <div className="card-body">
                <div className="card-title">
                  <h5>{event.title}</h5>
                  <h5>{event.location}</h5>
                </div>
              </div>
            </div>
          ))}
        </section> */}
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
        {/* <section className="articles">
          {this.props.articles.map(article => (
            <div key={article.id} className="card">
              <div className="card-body">
                <div className="card-title">
                  <h5>{article.name}</h5>
                  <h5>{article.completionDate}</h5>
                </div>
              </div>
            </div>
          ))}
        </section> */}
      </React.Fragment>
    );
  }
}
