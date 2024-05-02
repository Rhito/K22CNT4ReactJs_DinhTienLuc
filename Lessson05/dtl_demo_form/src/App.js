import "./App.css";
import DTL_Form1 from "./Components/DTL_Form1";
import DtlForm2 from "./Components/DtlForm2";
import DtlForm3 from "./Components/DtlForm3";

import React, { Component } from "react";

export default class App extends Component {
  dtlSubmit = (par) => {
    console.log("App", par);
  };
  render() {
    return (
      <div className="App">
        <h2>Controled Component ReactJS Form</h2>
        <DTL_Form1 />
        <DtlForm2 />
        <DtlForm3 onSubmit={this.dtlSubmit} />
      </div>
    );
  }
}
