import React, { Component } from "react"
import { Link } from "react-router-dom"
import {withRouter} from 'react-router-dom'

 class Welcome extends Component {

    // // Set initial state needs to be empty
    // state = {
    //     username: "",
    //     password: ""
    // }

    // // Update state whenever an input field is edited
    // handleFieldChange = (evt) => {
    //     const stateToChange = {}
    //     stateToChange[evt.target.id] = evt.target.value
    //     this.setState(stateToChange)
    // }

    // // Simplistic handler for login submit; e is event
    // handleLogin = (e) => {
    //     e.preventDefault()

    //     /*
    //         For now, just store the username and password that
    //         the customer enters into local storage.
    //     */
    //     sessionStorage.setItem(
    //         "credentials",                       //key
    //         JSON.stringify({
    //             username: this.state.username,        //values coming from state
    //             password: this.state.password
    //         })
    //     )
    //     this.props.history.goBack()
    // }
//form of the form
    render() {
        return (
            <form>
                <h1 className="h3 mb-3 font-weight-normal">Welcome to Nutshell Please Register or Login</h1>
                {/* <label htmlFor="inputUsername">
                    Username
                 </label>
                <input onChange={this.handleFieldChange} type="username"
                    //    id="username"
                       placeholder="Username"
                       required="" autoFocus="" />
                <label htmlFor="inputPassword">
                    Password
                </label>
                <input onChange={this.handleFieldChange} type="password"
                    //    id="password"
                       placeholder="Password"
                       required="" /> */}
                <button><Link to="/register">Register</Link></button>
                <button><Link to="/login">Login</Link></button>
            </form>
        )
    }
}


export default withRouter(Welcome)