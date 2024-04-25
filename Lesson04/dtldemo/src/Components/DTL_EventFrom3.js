import React, { Component } from "react";
// Xử lý sự kiện với prop và state
export default class DTL_EventFrom3 extends Component {
  constructor(props) {
    super(props);
    // tạo đối tượng dữ liệu thông qua state
    this.state = {
      name: "Đinh Tiến Lực",
      job: "Student",
    };
  }

  handleChangeName = (e) => {
    this.setState({
      name: "K22CNT1-ReactJs",
    });
  };
  render() {
    return (
      <div>
        <h2> Thay đổi dữ liệu trong state</h2>
        <p>
          Dữ liệu {this.state.name} - {this.state.job}
        </p>
        <button onClick={this.handleChangeName}>Thay đổi name</button>
      </div>
    );
  }
}
