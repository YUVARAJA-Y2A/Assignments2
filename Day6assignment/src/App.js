import { Component } from "react";
import Employee from "./Employee";
import Helloworld from "./Helloworld";
import Votingtable from "./Votingtable";
class App extends Component {
  render() {
    return (
      <span>
        <h2 class="heading">Voting</h2>
        <Votingtable language="C" />
        <Votingtable language="C++" />
        <Votingtable language="Java" />
        <Votingtable language="Python" />
        <Employee name={"Pranav S"} salary={19999} />
        <Employee name={"Shanmugam S"} salary={20000} />
        <Helloworld />
      </span>
    );
  }
}
export default App;
