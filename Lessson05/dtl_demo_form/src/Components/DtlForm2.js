import React, { Component } from "react";

export default class DtlForm2 extends Component {
  // 1.
  constructor(props) {
    super(props);
    this.state = {
      course: "Dtl-HTML5",
    };
  }

  // 3. ham xu ly su kien
  handleChange = (e) => {
    this.setState({
      course: e.target.value,
    });
  };
  //4.
  dtlHandleSubmit = (e) => {
    e.preventDefault();
    alert(this.state.course);
  };
  render() {
    // 2.
    return (
      <div>
        <form onSubmit={this.dtlHandleSubmit}>
          <label>Course</label>
          <select value={this.state.course} onChange={this.handleChange}>
            <option value={"Dtl-HTML5"}>Dtl-HTML5</option>
            <option value={"Dtl_CSS3"}>Dtl_CSS3</option>
            <option value={"Dtl-JS"}>Dtl-JS</option>
            <option value={"Dtl-RJ"}>Dtl-RJ</option>
          </select>
          <input type="submit" value={"Submit"} />
        </form>
      </div>
    );
  }
}
