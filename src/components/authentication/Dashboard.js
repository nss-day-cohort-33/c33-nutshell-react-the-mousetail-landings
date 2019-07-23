import React, { Component } from 'react'
import NavBar from "../nav/NavBar";
import ApplicationViews from "../ApplicationViews";



export default class Dashboard extends Component {
    render() {
    return (
      <React.Fragment>
        <NavBar />

        <ApplicationViews />
        <h1>Welcome to Nutshell, Have Fun!</h1>
      </React.Fragment>
    );
  }
}
