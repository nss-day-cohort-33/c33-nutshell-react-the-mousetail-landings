import React, { Component } from "react";
import { Redirect } from 'react-router-dom'
import NavBar from "./nav/NavBar";
import ApplicationViews from "./ApplicationViews";
import "./Nutshell.css";
import "bootstrap/dist/css/bootstrap.min.css"

class Nutshell extends Component {
isAuthenticated = () => sessionStorage.getItem("userId") !== null

  render() {
    // if(this.isAuthenticated()){
    return (
      <React.Fragment>
        <NavBar />
        <ApplicationViews />
      </React.Fragment>
    );
  }
  // else {
  //   return <Redirect to="/welcome" />
  //   }

}

export default Nutshell;
