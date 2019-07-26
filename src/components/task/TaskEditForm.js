import React, { Component } from "react"
import TaskManager from "../modules/TaskManager"


let currentUserId = parseInt(sessionStorage.getItem("userId"))

export default class TaskEditForm extends Component {
    // Set initial state
    state = {
      taskName: "",
      completionDate: "",
      completed: false,
      userId: currentUserId
    }


    handleFieldChange = evt => {
        const stateToChange = {}
        stateToChange[evt.target.id] = evt.target.value
        this.setState(stateToChange)
    }

    constructor() {
      super()
    this.handleEditTaskNameKeyUp = this.keyUpHandler.bind(this, 'EditTaskName')}

    keyUpHandler(refName, e) {
      console.log(refName);

  }

    updateExistingTask = evt => {
      evt.preventDefault()
          const editedTask = {
          id: this.props.match.params.taskId,
          name: this.state.taskName,
          completionDate: this.state.completionDate,
          completed: false,
          userId: this.state.userId
        };

    this.props.updateTask(editedTask)
    .then(() => this.props.history.push("/tasks"))
    }


    componentDidMount() {
      TaskManager.get("tasks", this.props.match.params.taskId)
      .then(task => {
        console.log(task)
        this.setState({
          taskName: task.name,
          completionDate: task.completionDate,
          completed: false,
          userId: this.state.userId
        });
      });
    }


    render() {
      return (
        <React.Fragment>
          <form className="TaskForm">
            <div className="form-group">
              <label htmlFor="taskName">Task Name: Hit Enter to Submit Edit</label>
              <input
                type="text"
                required
                ref="EditTaskName"
                className="form-control"
                onChange={this.handleFieldChange}
                // onKeyUp={this.handleEditTaskNameInput}

                id="taskName"
                value = {this.state.taskName}
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
                value = {this.state.completionDate}
              />
            </div>
            <button
              type="submit"
              onClick={this.updateExistingTask}
              className="btn btn-primary"
            >
              Submit Edit
            </button>
          </form>
        </React.Fragment>
      );
    }
}