import React, { Component } from "react";
import "./student.css";

class Student extends Component {
  state = {
    name: "Pranav",
    age: 22,
  };
  render() {
    return (
      <div>
        <p>
          My name is <span class="student-name">{this.state.name}</span> and my
          age is <span class="student-age">{this.state.age}</span>
        </p>
      </div>
    );
  }
}
export default Student;
