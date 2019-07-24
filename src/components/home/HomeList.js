import React, { Component } from 'react'
import TaskList from "./task/TaskList"


export default class HomeList extends Component {
    render() {
        return (
            <React.Fragment>
                <section className="tasks">
            {
                this.props.tasks.map(task =>
                    <div key={task.id} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {/* <img src={dog} className="icon--dog" /> */}
                                <h5>{task.name}</h5>
                                <h5>{task.completionDate}</h5>
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
