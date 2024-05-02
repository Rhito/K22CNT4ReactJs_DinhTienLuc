import React, { Component } from "react";

export default class DTL_Form1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Dinh Tien Luc",
    };
  }

  // Ham xu ly du lieu khi thay doi tren text
  handleChange = (event) => {
    // cap nhat lai state
    this.setState({ studentName: event.target.value });
  };

  // Su kien submit form
  handleSubmit = (ev) => {
    console.log(ev);
    ev.preventDefault();
    alert(this.state.studentName);
  };

  render() {
    return (
      <div>
        <h2>Demo ReactJS form - Text</h2>
        <form>
          <label>Student name: </label>
          <input value={this.state.studentName} onChange={this.handleChange} />
          <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
