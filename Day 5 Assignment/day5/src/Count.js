import { Component } from "react";
import "./count.css";
import Student from "./Student";
import Print from "./Print";

class Count extends Component {
  state = {
    count: 0,
  };
  increamentButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  decreamentButton = () => {
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <Student />
        <Print />
        <h2>count : {this.state.count}</h2>
        <button className="increament-button" onClick={this.increamentButton}>
          Increament
        </button>
        <button className="decreament-button" onClick={this.decreamentButton}>
          Decreament
        </button>
      </div>
    );
  }
}
export default Count;
