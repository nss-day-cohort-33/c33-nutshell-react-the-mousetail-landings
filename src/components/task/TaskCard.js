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

        //   componentDidMount() {
        //     TaskManager.get("tasks",currentUserId)
        //     .then(task => {
        //       this.setState({
        //         name: task.name,
        //         completionDate: task.completionDate,
        //         completed: true,
        //         userId: this.state.userId
        //       });
        //     });
        //   }

render() {

    return (
        <div key={this.props.task.id} className="card">
            <div className="card-body">
                <div className="card-title">
                    <h5>Task: {this.props.task.name}</h5>
                    <h5>Complete By: {this.props.task.completionDate}</h5>
                    <label htmlFor="completed">Check to Complete</label>
                    <input  type="checkbox"
                            required
                            className="form-control"
                            onClick={this.updateExistingTask}
                            id="completed"/>

                </div>
            </div>
        </div>

    )

}
}