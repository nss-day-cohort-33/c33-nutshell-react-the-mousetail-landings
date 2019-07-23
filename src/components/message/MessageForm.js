import { Route } from "react-router-dom";
import MessageManager from "../modules/MessageManager"

export default class MessageManager extends Component {
    state = {
        userName: "",
        message: "",
        date: ""
      };

// Update state whenever an input field is edited
handleFieldChange = evt => {
    const stateToChange = {};
    stateToChange[evt.target.id] = evt.target.value;
    this.setState(stateToChange);
  };
   /*
        Local method for validation, creating message object, and
        invoking the function reference passed from parent component
     */
    constructNewMessage = evt => {
        evt.preventDefault();
        if (this.state.employee === "") {
          window.alert("Please select a caretaker");
        } else {
          const message = {
            message: this.state.message,
            userName: this.state.userName,
    // Make sure the userId is saved to the database as a number since it is a foreign key.
            userId: parseInt(this.state.userId)
          };
    
          // Create the message and redirect user to message list
          this.props
            .addMessage(message)
            .then(() => this.props.history.push("/messages"));
        }

}