import React, { Component } from "react";
import "./form.css";

class Registrationform extends Component {
  render() {
    return (
      <div className="main">
        <h1>
          <center>Register New Account</center>
        </h1>
        <div className="row-1">
          <div>
            <input type="text" placeholder="First Name"></input>
          </div>

          <div>
            <input type="text" placeholder="Last Name"></input>
          </div>
        </div>
        <div className="row-2">
          <input type="text" placeholder="Name"></input>
        </div>
        <div className="row-3">
          <input type="text" placeholder="City"></input>
        </div>
        <div className="row-4">
          <input type="text" placeholder="Phone Number"></input>
        </div>
        <div className="row-5">
          <input type="email" placeholder="E-mail"></input>
        </div>
        <div className="create-account-button">
          <div>
            <button className="create-account" onClick={this.handleCreate}>
              Create Account
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default Registrationform;
