import React, { Component } from "react";
//import "./App.css";
import Button from "./components/Buttons";
import Result from "./components/Results";

class App extends Component {
  constructor() {
    super();

    this.state = {
      result: "",
    };
  }
  //Function to perform the onclick operation
  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    } else if (button === "CE") {
      this.backspace();
    } else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };
  //Function to perform the calculation and return the result to the screen
  calculate = () => {
    var checkResult = "";
    if (this.state.result.includes("--")) {
      checkResult = this.state.result.replace("--", "+");
    } else {
      checkResult = this.state.result;
    }

    try {
      this.setState({
        // eslint-disable-next-line
        result: (eval(checkResult) || "") + "",
      });
    } catch (e) {
      this.setState({
        result: "error",
      });
    }
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  backspace = () => {
    this.setState({
      result: this.state.result.slice(0, -1),
    });
  };

  render() {
    return (
      <div>
        <div className="calculator-body">
          <h1>Simple Calculator</h1>
          <Result result={this.state.result} />
          <Button onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
