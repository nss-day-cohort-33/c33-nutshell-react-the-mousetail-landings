import React, {Component} from 'react'
import "./Event.css"

export default class EventForm extends Component {
    state = {
        userId: parseInt(sessionStorage.getItem("userId")),
        title: " ",
        location: " ",
        date: " ",
        time: " "
      }
    
      // Update state whenever an input field is edited
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      };
    
      constructNewEvent = evt => {
        evt.preventDefault();
        if (this.state.title === "") {
          window.alert("Please enter a title");
        }
        if (this.state.location === "") {
            window.alert("Please enter a location");
        }
        if (this.state.date === "") {
            window.alert("Please select a date");
        }
        if (this.state.time === "") {
            window.alert("Please specify a time");
        } else {
          const event = {
            title: this.state.title,
            location: this.state.location,
            date: this.state.date,
            time: this.state.time
          };
        this.props
            .addEvent(event)
            .then(() => this.props.history.push("/events"));
    }
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
                <button onClick={this.handleSubmit}>Save</button>
            </form>
        </React.Fragment>
    )
}}