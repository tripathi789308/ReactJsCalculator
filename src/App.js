import React, { Component } from "react";
import "./App.css";
import Button from "./components/button.jsx";
import Input from "./components/input.jsx";
import Clear from "./components/clear.jsx";
import * as math from "mathjs";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  addToInput = val => {
    this.setState({ input: this.state.input + val });
  };
  clearInput = () => {
    this.setState({ input: "" });
  };
  calcValue = () => {
    this.setState({ input: math.evaluate(this.state.input) });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">
          <span className="badge badge-warning">Calculator</span>
        </h1>
        <Input input={this.state.input} />
        <div className="lineup">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.addToInput}>/</Button>
        </div>
        <div className="lineup">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button>
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.addToInput}>*</Button>
        </div>
        <div className="lineup">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.addToInput}>+</Button>
        </div>
        <div className="lineup">
          <Button handleClick={this.addToInput}>.</Button>
          <Button handleClick={this.addToInput}>0</Button>
          <Button handleClick={() => this.calcValue()}>=</Button>
          <Button handleClick={this.addToInput}>-</Button>
        </div>
        <div>
          <Clear handleClear={this.clearInput}>Clear</Clear>
        </div>
      </div>
    );
  }
}

export default App;
