import React, { Component } from "react";
// import "./Task.css";

export default class TaskForm extends Component {
  // Set initial state
  state = {
    taskName: "",
    completionDate: "",
    completed: false,
    userId: ""
  };

  // Update state whenever an input field is edited
  handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };

  /*
        Local method for validation, creating task object, and
        invoking the function reference passed from parent component
     */
  constructNewTask = evt => {
    let userId = sessionStorage.getItem("userId")
    evt.preventDefault();
    const task = {
        name: this.state.taskName,
        completionDate: this.state.completionDate,
        completed: false,
        // userId: parseInt(this.setState.sessionStorage.getItem("userId"))
        // Make sure the userId is saved to the database as a number since it is a foreign key.
        userId: parseInt(this.setState.userId)
      };

      // Create the animal and redirect user to animal list
      this.props
        .addTask(task)
        .then(() => this.props.history.push("/tasks"));
    }


  render() {
    return (
      <React.Fragment>
        <form className="taskForm">
          <div className="form-group">
            <label htmlFor="taskName">Task Name</label>
            <input
              type="text"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="taskName"
              placeholder="Task Name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="completionDate">Completion Date</label>
            <input
              type="date"
              required
              className="form-control"
              onChange={this.handleFieldChange}
              id="completionDate"
              placeholder="Completion Date"
            />
          </div>
          <button
            type="submit"
            onClick={this.constructNewTask}
            className="btn btn-primary"
          >
            Add Task
          </button>
        </form>
      </React.Fragment>
    );
  }
}


