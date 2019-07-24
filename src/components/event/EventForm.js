import React, {Component} from 'react'
import "./Event.css"

export default class EventForm extends Component {
    state = {
        userId: "",
        title: "",
        location: "",
        date: "",
        time: ""
      }

      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }

      constructNewEvent = inputEvent => {
        inputEvent.preventDefault();
          const newEvent = {
            userId: parseInt(this.state.userId),
            title: this.state.title,
            location: this.state.location,
            date: this.state.date,
            time: this.state.time
          };
        this.props
            .addEvent(newEvent)
            .then(() => this.props.history.push("/home"));
    }

          
          render() {
              return (
                  <React.Fragment>
            <form>
                <div className="event-form-div">
                    <label htmlFor="title-of-event">Title This Event</label>
                    <input type="text" id="title" required onChange={this.handleFieldChange}/>
                </div>
                <div className="event-form-div">
                    <label htmlFor="location-of-event">Location</label>
                    <input type="text" id="location" required onChange={this.handleFieldChange}/>
                </div>
                <div className="event-form-div">
                    <label htmlFor="date-of-event">Date</label>
                    <input type="date" id="date" required onChange={this.handleFieldChange}/>
                </div>
                <div className="event-form-div">
                    <label htmlFor="time-of-event">Time</label>
                    <input type="text" id="time" required onChange={this.handleFieldChange}/>
                </div>
                <button onClick={this.constructNewEvent}>Save</button>
            </form>
            <section className="events">
                {this.props.events.map(each =>
                    <div key={each.userId} className="card">
                        <div className="card-body">
                            <div className="card-title">
                                {/* <img src={dog} className="icon--dog" /> */}
                                <h2>{each.title}</h2>
                                <h4>{each.date}</h4>
                                <h4>{each.time}</h4>
                                <h3>{each.location}</h3>
                                <button
                                    onClick={() => this.props.deleteEvent(each.id)}
                                    className="card-link">Delete</button>
                                    <button
                                    onClick={() => this.props.editEvent(each.id)}
                                    className="card-link">Edit</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        </React.Fragment>
    )
}}