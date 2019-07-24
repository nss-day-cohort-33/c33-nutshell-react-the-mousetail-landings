import React, { Component } from "react"
import "./Task.css"

export default class TaskList extends Component {
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
                this.props.tasks.map(task =>
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