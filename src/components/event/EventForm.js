import React, {Component} from 'react'
import "./Event.css"
import EventManager from '../modules/EventManager';

let userId = parseInt(sessionStorage.getItem("userId"))
export default class EventForm extends Component {
    state = {
        title: "",
        location: "",
        date: "",
        time: "",
        userId: userId
      }

      //right now it is still intaking the userId as a string and not a number
      //lets see if we can fix that next
      
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }

      constructNewEvent = inputEvent => {
        inputEvent.preventDefault();
          const newEvent = {
            title: this.state.title,
            location: this.state.location,
            date: this.state.date,
            time: this.state.time,
            userId: this.state.userId
          };
        this.props
            .addEvent(newEvent)
            .then(() => this.props.history.push("/events"));
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
                    <div key={each.id} className="event-card">
                        <div className="event-card-body">
                            <div className="event-card-title">
                                {/* <img src={dog} className="icon--dog" /> */}
                                <h5>{each.title}</h5>
                                <h6>{each.date}</h6>
                                <p>{each.time}</p>
                                <h6>{each.location}</h6>
                                <button
                                    onClick={() => this.props.deleteEvent(each.id)}
                                    className="event-card-link">Delete</button>
                                    <button
                                    onClick={() => this.props.history.push(`/events/${each.id}/edit`)}
                                    className="event-card-link">Edit</button>
                            </div>
                        </div>
                    </div>
                )
            }
            </section>
        </React.Fragment>
    )
}}