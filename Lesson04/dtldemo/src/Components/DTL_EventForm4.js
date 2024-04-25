import React, { Component } from "react";

export default class DTL_EventForm4 extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleGetName = () => {
    alert(this.props.name);
  };
  render() {
    return (
      <div>
        <h2>Lấy dữ liệu từ props</h2>
        <button onClick={this.handleGetName}>Get Name</button>
      </div>
    );
  }
}
