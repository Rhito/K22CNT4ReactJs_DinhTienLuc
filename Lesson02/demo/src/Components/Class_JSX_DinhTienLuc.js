import React, { Component } from "react";

export default class Class_JSX_DinhTienLuc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Đinh Tiến Lưc",
      class: "K22CNT4",
    };
  }
  user = {
    name: "Đinh Tiến Lưc",
    age: 20,
  };
  handleChange = (events) => {
    this.setState({
      name: "quac quac",
    });
  };
  render() {
    return (
      <div>
        <h2>Class components demo</h2>
        {this.user.name} - {this.user.age}
        <hr />
        <h3>{this.props.inf}</h3>
        <h3>{this.props.time}</h3>
        <h3>
          State: FullName: {this.state.name} <br />
          Class: {this.state.class}
        </h3>
        <button onClick={this.handleChange}>Change name</button>
      </div>
    );
  }
}
