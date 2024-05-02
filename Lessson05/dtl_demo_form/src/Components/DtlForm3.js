import React, { Component } from "react";

export default class DtlForm3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studentName: "Dinh Tien Luc",
      age: 20,
      course: "Dtl-HTML5",
      gender: true,
    };
  }

  dtlHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  };

  dtlHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // chuyen du lieu len App
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <div>
        <form>
          <div>
            <label>Student Name: </label>
            <input
              name="studentName"
              value={this.state.studentName}
              onChange={this.dtlHandleChange}
            />
          </div>
          <div>
            <label>Age: </label>
            <input
              name="age"
              value={this.state.age}
              onChange={this.dtlHandleChange}
            />
          </div>
          <div>
            <label>Gender: </label>
            <input
              name="gender"
              type="radio"
              value={true}
              defaultChecked={this.state.gender ? "checked" : ""}
              onChange={this.dtlHandleChange}
            />
            Nam
            <input
              name="gender"
              type="radio"
              value={false}
              defaultChecked={!this.state.gender ? "checked" : ""}
              onChange={this.dtlHandleChange}
            />
            Nu
          </div>
          <div>
            <form onSubmit={this.dtlHandleSubmit}>
              <label>Course: </label>
              <select
                name="course"
                value={this.state.course}
                onChange={this.dtlHandleChange}
              >
                <option value={"Dtl-HTML5"}>Dtl-HTML5</option>
                <option value={"Dtl_CSS3"}>Dtl_CSS3</option>
                <option value={"Dtl-JS"}>Dtl-JS</option>
                <option value={"Dtl-RJ"}>Dtl-RJ</option>
              </select>
            </form>
          </div>

          <button onClick={this.dtlHandleSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
