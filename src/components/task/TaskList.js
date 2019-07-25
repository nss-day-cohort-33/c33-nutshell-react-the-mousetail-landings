import React, { Component } from "react"
import "./Task.css"
import TaskManager from "../modules/TaskManager";

let userId = sessionStorage.getItem("userId")
export default class TaskList extends Component {
    state={
        tasks: []
    }

    componentDidMount() {
        TaskManager.getTaskByUserID(userId).then(tasks => {this.setState({ tasks })})
        }

    // completeTask() {
    //     TaskManager.getTaskByUserID(userId)
    //     .then(task => {
    //         task.complete = true
    //     })
    //     TaskManager.put(resource, resourceObjId)
    //     .then( () => {TaskManager.getTaskByUserID(userId)
    //         .then(tasks => {this.setState({tasks})})
    //     }
    // }

    render () {
        return (
            <React.Fragment>
                <div className="addTaskButton">
                    <button type="button"
                            onClick={()=> this.props.history.push("/tasks/new")}
                            className="btn btn-success">
                        Add Task
                    </button>
                </div>

                <section className="tasks">
            {
                this.state.tasks.map(task =>
                    <div key={task.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {/* <img src={dog} className="icon--dog" /> */}
                                <h5>Task: {task.name}</h5>
                                <h5>Complete By: {task.completionDate}</h5>
                                <label htmlFor="completed">Check to Complete</label>
                                <input type="checkbox"
                                        required
                                        className="form-control"
                                        onChange={this.handleFieldChange}
                                        id="completed"/>
                                {/* <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</button> */}
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
            </React.Fragment>
        )
    }
}