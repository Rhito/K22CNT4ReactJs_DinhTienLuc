import React, { Component } from "react";

export default class DTL_EventForm1 extends Component {
  evenHandleClick1 = () => {
    alert("event handle 1");
  };
  evenHandleClick2 = () => {
    alert("Event Click 2");
  };

  render() {
    return (
      <div>
        <h2>Event handle</h2>
        {/* gọi hàm xử lý sự kiện render */}
        <button onClick={this.evenHandleClick1()}>CLick1</button>
        {/* gọi hàm xử lý khi Click */}
        <button onClick={this.evenHandleClick1}>Click2</button>
      </div>
    );
  }
}
