import React, { Component } from "react";

class HandlingThis extends Component {
  constructor() {
    super();
    this.state = { name: "David" };
    // 2nd way  this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    console.log("inside handle click", this);
    this.setState({ name: "Johnson" });
  };

  render() {
    return (
      <div>
        <h1>Name is {this.state.name}</h1>
        <button onClick={this.handleClick}>Change</button>
      </div>
    );
  }
}

export default HandlingThis;
