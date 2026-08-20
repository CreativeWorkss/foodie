import React, { Component } from "react";

class ClChange extends Component {
  constructor() {
    super();
    this.state = { name: "David" };
  }

  handleChange = () => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <div>
        <h1>Name : {this.state.name}</h1>
        <input
          type="text"
          value={this.state.name}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default ClChange;
