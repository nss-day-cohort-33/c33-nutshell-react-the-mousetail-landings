import React, { Component } from "react"
import "./Event.css"

export default class EventList extends Component {
    render () {
        return (
            <React.Fragment>
                <section className="events">
            {
                this.props.events.map(each =>
                    <div key={each.userId} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {/* <img src={dog} className="icon--dog" /> */}
                                <h2>{each.title}</h2>
                                <h3>{each.location}</h3>
                                <h4>{each.date}</h4>
                                <h4>{each.time}</h4>
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