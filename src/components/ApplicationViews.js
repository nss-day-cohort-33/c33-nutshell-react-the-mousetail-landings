import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import ArticleManager from "../modules/ArticleManager"
import EventManager from "../modules/EventManager"
import MessageManager from "../modules/MessageManager"
import TaskManager from "../modules/TaskManager"

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

  ArticleManager.getAll("articles")
      .then(articles => newState.articles = articles)
  EventManager.getAll("events")
      .then(events => newState.events = events)
  MessageManager.getAll("messages")
      .then(messages => newState.messages = messages)
  TaskManager.getAll("tasks")
      .then(tasks => newState.tasks = tasks)
      .then(() => this.setState(newState))
}
  render() {
    return (
      <React.Fragment>
        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
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
            return null
            // Remove null and return the component which will show the user's tasks
          }}
        />

      </React.Fragment>
    );
  }
}
