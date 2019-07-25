import React, { Component } from 'react'
import EventManager from '../modules/EventManager'

let userId = parseInt(sessionStorage.getItem("userId"))
export default class EventEditForm extends Component {
    state = {
        title: "",
        location: "",
        date: "",
        time: "",
        userId: userId
      }
    
      handleFieldChange = evt => {
        const stateToChange = {};
        stateToChange[evt.target.id] = evt.target.value;
        this.setState(stateToChange);
      }
    
    editForm = (one) => {
        one.preventDefault()

        const editedEvent = {
            id: parseInt(this.props.match.params.eventId),
            title: this.state.title,
            location: this.state.location,
            date: this.state.date,
            time: this.state.time,
            userId: userId
        }
    this.props.editForm(editedEvent)
    .then(() => this.props.history.push("/events"))
    }

componentDidMount() {
    EventManager.getEventByUserID(this.props.match.params.eventId)
    .then(each => {
        this.setState ({
        title: each.title,
        location: each.location,
        date: each.date,
        time: each.time,
        userId: each.userId
    })})}

render() {
    return (
        <React.Fragment>
  <form>
      <div className="event-form-div">
          <label htmlFor="title-of-event">Title This Event</label>
          <input type="text" id="title" required value={this.state.title} onChange={this.handleFieldChange}/>
      </div>
      <div className="event-form-div">
          <label htmlFor="location-of-event">Location</label>
          <input type="text" id="location" required value={this.state.location} onChange={this.handleFieldChange}/>
      </div>
      <div className="event-form-div">
          <label htmlFor="date-of-event">Date</label>
          <input type="date" id="date" required value={this.state.date} onChange={this.handleFieldChange}/>
      </div>
      <div className="event-form-div">
          <label htmlFor="time-of-event">Time</label>
          <input type="text" id="time" required value={this.state.time} onChange={this.handleFieldChange}/>
      </div>
      <button onClick={this.editForm}>Save Changes</button>
  </form>
</React.Fragment>
)
}}