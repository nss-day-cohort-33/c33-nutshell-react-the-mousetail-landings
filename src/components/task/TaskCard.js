import React, { Component } from "react"
import "./Task.css"
import TaskManager from "../modules/TaskManager"

let currentUserId = parseInt(sessionStorage.getItem("userId"))
export default class TaskList extends Component {
    componentDidMount() {
          this.props.getUserTasks()
         }



        updateExistingTask = evt => {
            evt.preventDefault()
            this.props.task.completed = !this.props.task.completed
            this.props.updateTask(this.props.task)

          }

render() {
    return (
        <div key={this.props.task.id} className="card">
            <div className="card-body">
                <div className="card-title">
                    {/* <input type="hidden"
                           className="editTaskName"
                           onChange={this.handleFieldChange}
                           id={this.props.task.id}
                           value={this.props.task.name}/> */}
                    <h5 onClick={() => {this.props.history.push(`/tasks/${this.props.task.id}/edit`) }}>Task: {this.props.task.name}</h5>
                    <h5>Complete By: {this.props.task.completionDate}</h5>
                    <label htmlFor="completed">Check to Complete</label>
                    <input  type="checkbox"
                            required
                            className="form-control"
                            onClick={this.updateExistingTask}
                            id="completed"/>
                    {/* <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => {
                            this.props.history.push(`/tasks/${this.props.task.id}/edit`);
                        }}
                        >
                        Edit
                        </button> */}

                </div>
            </div>
        </div>

    )

}
}