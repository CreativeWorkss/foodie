import React, { Component } from "react";

class ClassStudy extends Component {
  constructor() {
    super();
    this.state = { street: "Basham Circle" };
  }
  render() {
    console.log(this.props);
    const { name, city } = this.props;
    const { street } = this.state;

    return (
      <div>
        <h1>Hello class Name : {name}</h1>
        <h1>City : {city}</h1>
        <h3>Street :{street} </h3>
      </div>
    );
  }
}

export default ClassStudy;
