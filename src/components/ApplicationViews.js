import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
<<<<<<< HEAD

// import ArticleManager from "../modules/ArticleManager"
import EventManager from "./modules/EventManager"
// import MessageManager from "../modules/MessageManager"
import TaskManager from "./modules/TaskManager"
import LoginManager from "./modules/LoginManager"
import TaskList from "./task/TaskList"
import EventForm from "./event/EventForm"
// import ArticleList from "./article/ArticleList"
// import MessageList from "./message/MessageList"
=======
import NavBar from "./nav/NavBar";
import ArticleManager from "./modules/ArticleManager"
import EventManager from "./modules/EventManager"
import MessageManager from "./modules/MessageManager"
import TaskManager from "./modules/TaskManager"
import LoginManager from "./modules/LoginManager"
import TaskList from "./task/TaskList"
import ArticleList from "./article/ArticleList"
import EventList from "./event/EventList"
import MessageList from "./message/MessageList"
import MessageForm from "./message/MessageForm"
import MessageDetail from "./message/MessageDetail"
>>>>>>> 536eae38b32b2745dc894bb4921ad20a2637ce89
import Login from "./authentication/Login"
import Welcome from "./authentication/Welcome"
import Register from "./authentication/Register"

class ApplicationViews extends Component {
  state = {
    users: [],
    messages: [],
    articles: [],
    events: [],
    friends: [],
    tasks: []
  };

addEvent = (thing) => {
  return EventManager.post("events", thing)
      .then(() => EventManager.getAll("events"))
      .then(eventData =>
          this.setState({
            events: eventData 
      })
  );
}

deleteEvent = (id) => {
  return EventManager.removeAndList("events", id)
    .then( eventsData => {
      this.props.history.push("/home")
      this.setState({
        events: eventsData})
      })
  }

isAuthenticated = () => sessionStorage.getItem("userId") !== null
  componentDidMount() {
    const newState = {};

    ArticleManager.getAll("articles").then(
      articles => (newState.articles = articles)
    );
    EventManager.getAll("events").then(
    events => (newState.events = events)
    );
    MessageManager.getAll("messages").then(
      messages => (newState.messages = messages)
    );
    TaskManager.getAll("tasks")
      .then(tasks => (newState.tasks = tasks))
      .then(() => this.setState(newState));
  }

  // Check if credentials are in local storage; isAuthenticated is a method
  // will return true or false
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

  deleteMessage = id => {
    return fetch(`http://localhost:5002/messages/${id}`, {
      method: "DELETE"
    })
      .then(MessageManager.getAll)
      .then(messages => {
        this.props.history.push("/messages");
        this.setState({ messages: messages });
      });
  };

  addTask = task => {
    return TaskManager.post("tasks", task)
      .then(() => TaskManager.getAll("tasks"))
      .then(tasks =>
        this.setState({
          tasks: tasks
        })
      );
  };

  addMessage = message =>
    MessageManager.post(message)
      .then(() => MessageManager.getAll())
      .then(messages =>
        this.setState({
          messages: messages
        })
      );

  updateMessage = editedMessageObject => {
    return MessageManager.put(editedMessageObject)
      .then(() => MessageManager.getAll())
      .then(messages => {
        this.setState({
          messages: messages
        });
      });
  };



getUser = (userName) => {
  return LoginManager.get("user", userName)
}

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/home" render={props => {
            return ( <TaskList  {...props} tasks={this.state.tasks} deleteTask={this.deleteTask} />)
              (<ArticleList  {...props} articles={this.state.articles} deleteArticle={this.deleteArticle} />)
              (<EventForm  {...props} events={this.state.events} deleteEvent={this.deleteEvent} addEvent={this.addEvent} />)
              (<MessageList  {...props} messages={this.state.messages} deleteMessage={this.deleteMessage} />)
          }}/>
        <Route
          exact path="/register" render={props => {
            return ( <Register {...props} users={this.state.users} addNewUser={this.addNewUser}/>);
          }}
          />
            
        <Route path="/events" render={(props) => {
          if(this.isAuthenticated()) {
            return <EventForm {...props} addEvent={this.addEvent} deleteEvent={this.deleteEvent} events={this.state.events} />
          } else {
            return <Redirect to="/login" /> 
          }}} />

        <Route exact path="/login" component={Login} />
        <Route
          path="/friends" render={props => {
            return null
            // Remove null and return the component which will show list of friends
          }}
        />
        <Route
          exact
          path="/messages"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <MessageList
                  {...props}
                  deleteMessage={this.deleteMessage}
                  messages={this.state.messages}
                />
              )
            } else {
              return <Redirect to="/login" />;
            }
          }}
        />
        {/* <MessageList messages={this.state.messages} />; */}
        {/* Our shiny new route. We pass employees to the AnimalForm so a
        dropdown can be populated */}
        <Route
          exact
          path="/messages/new"
          render={props => {
            return (
              <MessageForm
                {...props}
                addMessage={this.addMessage}
                // employees={this.state.employees}
              />
            )
          }}
        />
        <Route exact
          path="/messages/:messageId(\d+)"
          render={props => {
            // Find the message with the id of the route parameter
            let message = this.state.messages.find(
              message => message.id === parseInt(props.match.params.messageId)
            )

            // If the message wasn't found, create a default one
            if (!message) {
              message = { id: 404, name: "404", message: "Message not found" };
            }
            return (
              <MessageDetail message={message} deleteMessage={this.deleteMessage} />
            )
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
              )
            } else {
              return <Redirect to="/" />;
            }
          }}
        />
        <Route path="/login" component={Login} />
      </React.Fragment>
    )
        }
      }
export default withRouter(ApplicationViews);

