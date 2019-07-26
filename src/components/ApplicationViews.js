import { Route, Redirect } from "react-router-dom";
import React, { Component } from "react";
import { withRouter } from "react-router";
import EventManager from "./modules/EventManager"
import EventForm from "./event/EventForm"
import EventEditForm from "./event/EventEditForm"
import MessageManager from "./modules/MessageManager"
import TaskManager from "./modules/TaskManager"
import LoginManager from "./modules/LoginManager"
import TaskList from "./task/TaskList"
import TaskForm from "./task/TaskForm"
import HomeList from "./home/HomeList"
import MessageList from "./message/MessageList"
import MessageForm from "./message/MessageForm"
import MessageDetail from "./message/MessageDetail"
import Login from "./authentication/Login"
import Welcome from "./authentication/Welcome"
import Register from "./authentication/Register"
import ArticleManager from "./modules/ArticleManager";
import ArticleEditForm from "./article/ArticleEditForm";
import ArticleList from "./article/ArticleList";
import ArticleForm from "./article/ArticleForm";

class ApplicationViews extends Component {
  state = {
    users: [],
    messages: [],
    articles: [],
    events: [],
    friends: [],
    tasks: []
  };

  getUserTasks = () => {
    TaskManager.getAll(sessionStorage.getItem("userId"))
    .then(user_tasks => this.setState({tasks: user_tasks}))
  }

  getUserEvents = () => {
    EventManager.getAll(sessionStorage.getItem("uderId"))
    .then(user_events => this.setState({events: user_events}))
  }

  componentDidMount() {
    const newState = {}
  ArticleManager.getAll("articles")
  .then(articles => (newState.articles = articles))
  .then(() =>  MessageManager.getAll("messages") )
  .then(messages => (newState.messages = messages))
  .then(() => TaskManager.getAll("tasks") )
  .then(tasks => (newState.tasks = tasks))
  .then(() => EventManager.getAll("events") )
  .then(events => (newState.events = events))
  .then(() => this.setState(newState))
  }

  addEvent = (eventObj) => {
  return EventManager.post("events", eventObj)
      .then(() => EventManager.getAll("events"))
      .then(eventData =>
          this.setState({
            events: eventData 
      })
  );
}

isAuthenticated = () => sessionStorage.getItem("userId") !== null;

deleteEvent = (id) => {
  return EventManager.removeAndList("events", id)
    .then( eventsData => {
      this.props.history.push("/events")
      this.setState({
        events: eventsData})
      })
  }

  editForm = (eventToEdit) => {
    return EventManager.put("events", eventToEdit)
      .then(() => EventManager.get("events", sessionStorage.getItem("userId")))
      .then(events => {
        this.props.history.push("/events")
        this.setState({
          events: events
        })
      })
  }
  
  getUserArticles = () => {
    ArticleManager.getAll(parseInt(sessionStorage.getItem("userId"))).then(
      userArticles => this.setState({ articles: userArticles })
    );
  };
  // componentDidMount() {
  //   const newState = {};

  //   ArticleManager.getAll("articles")
  // //     .then(articles => (newState.articles = articles))
  // //     .then(
  // //       TaskManager.getAll("tasks")
  // //         .then(tasks => (newState.tasks = tasks))
  // //         .then(() => this.setState(newState))
  // //     );
  // // }


  isAuthenticated = () => sessionStorage.getItem("userId") !== null;

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
  deleteArticle = article => {
    ArticleManager.removeAndList("articles", article).then(articles => {
      this.setState({ articles: articles });
    });
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

  // completeTask = (completedTaskObject) => {
  //   return TaskManager.put("tasks", completedTaskObject)
  //   .then(() => TaskManager.getTaskByUserID(userId))
  //   .then(tasks => { this.setState({ tasks })
  //   });
  // };

  getUser = userName => {
    return LoginManager.get("user", userName);
  };

  render() {
    return (
      <React.Fragment>
        <Route exact path="/" component={Welcome}/>
        <Route exact path="/home" render={props => {
          console.log(this.state.messages)
          console.log(this.state.tasks)
            return ( <HomeList  {...props} tasks={this.state.tasks} articles={this.state.articles} messages={this.state.messages}
              events={this.state.events} deleteEvent={this.deleteEvent} editForm={this.editForm} />)
          }}/>

        <Route
          exact
          path="/home"
          render={props => {
            console.log(this.state.messages);
            console.log(this.state.tasks);
            return (
              <HomeList
                {...props}
                tasks={this.state.tasks}
                getUserArticles={this.getUserArticles}
                messages={this.state.messages}
                events={this.state.events}
              />
            );
          }}
        />
        <Route
          exact
          path="/register"
          render={props => {
            return (
              <Register
                {...props}
                users={this.state.users}
                addNewUser={this.addNewUser}
              />
            );
          }}
          />
        <Route path="/login" component={Login}/>
        
        <Route exact path="/events" render={(props) => {
          if(this.isAuthenticated()) {
            return <EventForm {...props} addEvent={this.addEvent} deleteEvent={this.deleteEvent} events={this.state.events} />
          } else {
            return <Redirect to="/login" /> 
          }}} />
        
        <Route
          path="/events/:eventId(\d+)/edit" render={props => {
            return <EventEditForm {...props} editForm={this.editForm} />
          }}
        />


        <Route
          path="/friends" render={props => {
            return null
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
                  // articles={this.state.articles}
                  getUserArticles={this.getUserArticles}
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
            // path="/friends"
            // render={props => {
            //   return null;
            // Remove null and return the component which will show list of friends
          }}
        />
        <Route
          // path="/friends"
          // render={props => {
          //   return null;
          // Remove null and return the component which will show list of friends
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
              );
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
            );
          }}
        />
        <Route
          exact
          path="/messages/:messageId(\d+)"
          render={props => {
            // Find the message with the id of the route parameter
            let message = this.state.messages.find(
              message => message.id === parseInt(props.match.params.messageId)
            );

            // If the message wasn't found, create a default one
            if (!message) {
              message = { id: 404, name: "404", message: "Message not found" };
            }
            return (
              <MessageDetail
                message={message}
                deleteMessage={this.deleteMessage}
              />
            );
          }}
        />
        <Route
          exact
          path="/tasks"
          render={props => {
            if (this.isAuthenticated()) {
              return (
                <TaskList
                  {...props}
                  tasks={this.state.tasks}
                  // getUserTasks={this.getUserTasks}
                  deleteTask={this.deleteTask}
                />
              );
            } else {
              return <Redirect to="/" />;
            }
          }}
        />

        <Route
          path="/tasks/new"
          render={props => {
            return <TaskForm {...props} addTask={this.addTask} />;
          }}
        />
      </React.Fragment>
    );
  }
}
export default withRouter(ApplicationViews);
