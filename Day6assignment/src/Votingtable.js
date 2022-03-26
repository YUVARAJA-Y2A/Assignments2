import { Component } from "react";
import "./votingtable.css";

class Votingtable extends Component {
  state = {
    count: 0,
  };
  increamentButton = () => {
    this.setState({ count: this.state.count + 1 });
  };
  render() {
    return (
      <div class="main">
        <span class="span-language">{this.props.language}</span>
        <span class="span-count">{this.state.count}</span>
        <span class="span-button">
          <button class="button" onClick={this.increamentButton}>
            Vote
          </button>
        </span>
      </div>
    );
  }
}
export default Votingtable;
