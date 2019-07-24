import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import ArticleManager from "./modules/ArticleManager";
import ArticleEditForm from "./article/ArticleEditForm";
import ArticleList from "./article/ArticleList";
import ArticleForm from "./article/ArticleForm"

// import ArticleManager from "../modules/ArticleManager"
// import EventManager from "../modules/EventManager"
// import MessageManager from "../modules/MessageManager"
import TaskManager from "./modules/TaskManager";
import TaskList from "./task/TaskList";
import Login from "./authentication/Login";

export default class ApplicationViews extends Component {
  state = {
    users: [],
    messages: [],
    articles: [],
    events: [],
    friends: [],
    tasks: []
  };

  componentDidMount() {
    const newState = {};

    ArticleManager.getAll("articles")
      .then(articles => (newState.articles = articles))
      .then(
        TaskManager.getAll("tasks")
          .then(tasks => (newState.tasks = tasks))
          .then(() => this.setState(newState))
      );
  }

  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  addTask = task => {
    return TaskManager.post("tasks", task)
      .then(() => TaskManager.getAll("tasks"))
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );
  };
  updateArticle = (resourse, editedArticleObject) => {
    return ArticleManager.put(resourse, editedArticleObject)
      .then(() => ArticleManager.getAll(resourse))
      .then(articles => {
        this.setState({
          articles: articles
        });
      });
  };
  addArticle = article =>
  ArticleManager.post("articles", article)
    .then(() => ArticleManager.getAll("articles"))
    .then(articles =>
      this.setState({
        articles: articles
      })
    );
  render() {
    return (
      <React.Fragment>
        <Route
          path="/events"
          render={props => {
            return null;
            // Remove null and return the component which will show the user's events
          }}
        />

        <Route
          exact
          path="/articles"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <ArticleList
                  {...props}
                  articles={this.state.articles}
                  deleteArticle={this.deleteArticle}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route
          path="/articles/:articleId(\d+)/edit"
          render={props => {
            return (
              <ArticleEditForm {...props} updateArticle={this.updateArticle} />
            );
          }}
        />
        <Route
          path="/articles/new"
          render={props => {
            return <ArticleForm {...props} addArticle={this.addArticle} />;
          }}
        />

        <Route
          path="/friends"
          render={props => {
            return null;
            // Remove null and return the component which will show list of friends
          }}
        />

        <Route
          path="/messages"
          render={props => {
            return null;
            // Remove null and return the component which will show the messages
          }}
        />

        <Route
          path="/tasks"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <TaskList
                  {...props}
                  tasks={this.state.tasks}
                  deleteTask={this.deleteTask}
                />
              );
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />

        <Route path="/login" component={Login} />
      </React.Fragment>
    );
  }
}
