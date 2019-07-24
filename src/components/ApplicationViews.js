import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import NavBar from "./nav/NavBar";

// import ArticleManager from "../modules/ArticleManager"
import EventManager from "./modules/EventManager"
// import MessageManager from "../modules/MessageManager"
import TaskManager from "./modules/TaskManager"
import LoginManager from "./modules/LoginManager"
import TaskList from "./task/TaskList"
<<<<<<< HEAD
import EventList from "./event/EventList"
import EventForm from "./event/EventForm"
=======
import ArticleList from "./article/ArticleList"
import EventList from "./event/EventList"
import MessageList from "./message/MessageList"
>>>>>>> c85dbe919ff17101c275bb4b5168a604e54f8db1
import Login from "./authentication/Login"
import Welcome from "./authentication/Welcome"
import Register from "./authentication/Register"


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
  EventManager.getAll("events")
       .then(events => newState.events = events)
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



getUser = (userName) => {
  return LoginManager.get("user", userName)

}



  render() {
    return (
      <React.Fragment>

        <Route exact path="/" component={Welcome}/>

        <Route exact path="/home" render={props => {
            return ( <TaskList  {...props} tasks={this.state.tasks} deleteTask={this.deleteTask} />)
              // (<ArticleList  {...props} articles={this.state.articles} deleteArticle={this.deleteArticle} />)
              // (<EventList  {...props} events={this.state.events} deleteEvent={this.deleteEvent} />)
              // (<MessageList  {...props} messages={this.state.messages} deleteMessage={this.deleteMessage} />)
          }}/>

        <Route
<<<<<<< HEAD
          path="/events" render={props => {
            if(this.isAuthenticated()) {
            return <EventList {...props} deleteEvent={this.deleteEvent} events={this.state.events} />
          } else {
          return <Redirect to="/login" /> }
=======
          exact path="/register" render={props => {
            return ( <Register {...props} users={this.state.users} addNewUser={this.addNewUser}/>);
>>>>>>> c85dbe919ff17101c275bb4b5168a604e54f8db1
          }}
          />
          <Route path="/events/new" render={(props) => {
              return <EventForm
                {...props}
                addEvent={this.addEvent} />
            }} />



        <Route exact path="/login" component={Login} />

        <Route
          path="/events" render={props => {
            return null
            // Remove null and return the component which will show the user's events
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
          path="/tasks" render={(props) => {
            if (this.isAuthenticated()) {
              return <TaskList  {...props} tasks={this.state.tasks} deleteTask={this.deleteTask} />
            } else {
                return <Redirect to="/" />
               }
          }} />


      </React.Fragment>
    );
  }
}
