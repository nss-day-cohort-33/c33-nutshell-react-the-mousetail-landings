import React, { Component } from "react"
import "./Task.css"
import TaskCard from "./TaskCard"

let currentUserId = parseInt(sessionStorage.getItem("userId"))

export default class TaskList extends Component {
    state= {
        tasks: []
    }


    componentDidMount() {
          this.props.getUserTasks()
         }



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
                    <TaskCard key={task.id} task={task} {...this.props} />
                )
            }
            </section>
            </React.Fragment>
        )
    }
}