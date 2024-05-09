import React, { Component } from "react";

export default class DtlProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: 0,
      title: "",
      status: false,
    };
  }
  dtlHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  dtlHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSummit(this.state);
  };
  render() {
    return (
      <div>
        <h2>Thêm mới sản phẩm</h2>
        <form className="col-md-6">
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                ID
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="id"
              value={this.state.id}
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={this.dtlHandleChange}
            />
          </div>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                Title
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="title"
              value={this.state.title}
              onChange={this.dtlHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Status
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="status"
              value={this.state.status}
              onChange={this.dtlHandleChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.dtlHandleSubmit}>
            Ghi lại
          </button>
        </form>
      </div>
    );
  }
}
