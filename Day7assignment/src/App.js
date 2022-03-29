import React, { Component } from "react";
import "./app.css";
import Ticketbooking from "./Ticketbooking";
class App extends Component {
  state = {
    title: "",
    fname: "",
    lname: "",
    date: "",
    email: "",
    password: "",
    confirmpassword: "",
    submit: false,

    agreed: false,
    warning: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleRegister = () => {
    if (this.state.password === "" && this.state.confirmpassword === "") {
      alert("Passwords should not be empty");
      this.setState({ submit: false });
    } else if (this.state.password !== this.state.confirmpassword) {
      alert("Password and Confirm Password is mismatch");
    } else if (this.state.agreed === false) {
      this.setState({ warning: "*Please accept the terms and Conditions" });
    } else {
      this.setState({ submit: true });
    }
  };
  handleCheckClick = () => {
    this.setState({ agreed: !this.state.agreed });
  };

  handleReset = () => {
    this.setState({
      title: "",
      fname: "",
      lname: "",
      date: "",
      email: "",
      password: "",
      confirmpassword: "",
    });
    this.setState({ submit: false });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            {!this.state.submit && (
              <div class="form">
                <div class="row-1">
                  <div class="div-title">
                    <label class="label-title">Title</label>
                    <div>
                      <select
                        class="title-dropdown"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                      >
                        <option>Mr.</option>
                        <option>Ms.</option>
                        <option>Mrs.</option>
                      </select>
                    </div>
                  </div>
                  <div class="div-firstname">
                    <label class="label-firstname">First Name </label>
                    <div>
                      <input
                        type="text"
                        class="input-firstname"
                        name="fname"
                        value={this.state.fname}
                        onChange={this.handleChange}
                      ></input>
                    </div>
                  </div>
                  <div class="div-lastname">
                    <div>
                      <label class="label-lastname">Last Name</label>
                    </div>
                    <input
                      type="text"
                      class="input-lastname"
                      name="lname"
                      value={this.state.lname}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div class="row-2">
                  <div class="div-dateofbirth">
                    <div>
                      <label class="label-dateofbirth">Date of Birth</label>
                    </div>
                    <input
                      type="date"
                      class="input-dateofbirth"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div class="div-email">
                    <div>
                      <label class="label-email">Email</label>
                    </div>
                    <input
                      type="email"
                      class="input-email"
                      name="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div class="row-3">
                  <div class="div-password">
                    <div>
                      <label class="label-password">
                        Password<label class="warning-message">*</label>
                      </label>
                    </div>
                    <input
                      type="password"
                      class="input-password"
                      name="password"
                      value={this.state.password}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                  <div class="div-confirmpassword">
                    <div>
                      <label class="label-confirmpassword">
                        Confirm Password<label class="warning-message">*</label>
                      </label>
                    </div>
                    <input
                      type="password"
                      class="input-confirmpassword"
                      name="confirmpassword"
                      value={this.state.confirmpassword}
                      onChange={this.handleChange}
                    ></input>
                  </div>
                </div>
                <div class="div-checkbox">
                  <input
                    type="checkbox"
                    checked={this.state.agreed}
                    onChange={this.handleCheckClick}
                  ></input>
                  <label>
                    Accept Terms & Conditions
                    <label class="warning-message">*</label>
                  </label>
                  <p class="warning-message">
                    {!this.state.agreed && this.state.warning}
                  </p>
                </div>
                <div class="div-buttons">
                  <button onClick={this.handleRegister} class="register-button">
                    Register
                  </button>
                  <button onClick={this.handleReset} class="reset-button">
                    Reset
                  </button>
                  <label class="info">
                    (<label class="warning-message">*</label>) Fields indicative
                    are mandatory
                  </label>
                </div>
              </div>
            )}
          </div>

          {this.state.submit && (
            <div>
              <h2>Registeration Form</h2>
              Name : {this.state.title + this.state.fname + this.state.lname}
              <br />
              Date of Birth : {this.state.date}
              <br />
              Email : {this.state.email}
              <br />I Agreed to the Terms & Conditions
            </div>
          )}
        </div>
        <Ticketbooking />
      </div>
    );
  }
}

export default App;
