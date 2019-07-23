import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
// import ArticleManager from "../modules/ArticleManager"
// import EventManager from "../modules/EventManager"
// import MessageManager from "../modules/MessageManager"
import TaskManager from "./modules/TaskManager"
import TaskList from "./task/TaskList"
import EventList from "./event/EventList"
import EventForm from "./event/EventForm"
import Login from "./authentication/Login"

export default class ApplicationViews extends Component {

  state = {
    users: [],
    messages: [],
    articles: [],
    events: [],
    friends: [],
    tasks: []
}

componentDidMount() {
  const newState = {}

  // ArticleManager.getAll("articles")
  //     .then(articles => newState.articles = articles)
  // EventManager.getAll("events")
  //     .then(events => newState.events = events)
  // MessageManager.getAll("messages")
  //     .then(messages => newState.messages = messages)
  TaskManager.getAll("tasks")
      .then(tasks => newState.tasks = tasks)
      .then(() => this.setState(newState))
}

isAuthenticated = () => sessionStorage.getItem("credentials") !== null

//need to add the edit (get and then put) and delete (delete) fetch calls for events

addTask = (task) => {
  return TaskManager.post("tasks", task)
      .then(() => TaskManager.getAll("tasks"))
      .then(tasks =>
          this.setState({
              tasks: tasks
      })
  );
}
  render() {
    return (
      <React.Fragment>
        <Route
          path="/events" render={props => {
            if(this.isAuthenticated()) {
            return <EventList {...props} deleteEvent={this.deleteEvent} events={this.state.events} addEvent={this.addEvent} />
          } else {
          return <Redirect to="/login" /> }
          }}
          />

        <Route
          exact path="/" render={props => {
            return null
            // Remove null and return the component which will show news articles
          }}
        />

        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages" render={props => {
            return null
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks" render={props => {
            if(this.isAuthenticated()){
              return <TaskList  {...props} tasks={this.state.tasks} deleteTask={this.deleteTask} />
            } else {
              return <Redirect to="/login" />
              }
          }}
        />

        <Route path="/login" component={Login} />

      </React.Fragment>
    );
  }
}
