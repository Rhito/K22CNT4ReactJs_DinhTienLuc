import React, { Component } from "react";

export default class DTL_class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "Lực",
      lastName: "Đinh Tiến",
      userName: "K22CNT4",
    };
  }
  Member = (props) => {
    return (
      <div>
        <h3>
          Xin chào: {props.fullName} - Bạn đã {props.age} tuổi
        </h3>
      </div>
    );
  };
  ListMember = (props) => {
    return (
      <>
        <this.Member fullName="Đinh Tiến Lực A" age="2000" />
        <this.Member fullName="Đinh Tiến Lực B" age="2000" />
      </>
    );
  };
  render() {
    return (
      <div>
        <h3>Class Component Demo</h3>
        <hr />
        <h3>Dữ liệu trong state</h3>
        <h3>Xin chào, {this.state.firstName}</h3>
        <hr />
        <h3>Dữ liệu từ props</h3>
        <p>Company: {this.props.company}</p>
        <p>Course: {this.props.course}</p>
        <this.Member fullName="Đinh Tiến Lực" age="20" />
        <this.ListMember />
      </div>
    );
  }
}
