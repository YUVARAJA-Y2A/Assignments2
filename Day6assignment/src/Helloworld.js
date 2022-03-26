import React, { Component } from "react";

class Helloworld extends Component {
  state = {
    titlename: "",
  };
  changeName = () => {
    if (this.state.titlename === "Vanakkam") {
      this.setState({ titlename: "Hello Ulagamae" });
    } else {
      this.setState({ titlename: "Vanakkam" });
    }
  };
  render() {
    return (
      <div>
        <br />
        <label>Just Click Me : </label>
        <button onClick={this.changeName}>Change</button>
        <h2>{this.state.titlename}</h2>
      </div>
    );
  }
}

export default Helloworld;
