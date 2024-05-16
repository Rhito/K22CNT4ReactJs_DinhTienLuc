import React, { Component } from "react";

export default class DtlProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dtl_productId: "0",
      dtl_productName: "Phone",
      dtl_quantity: 0,
      dtl_price: 0,
    };
  }
  dtlHandleChange = (e) => {
    let dtlName = e.target.name;
    let dtlValue = e.target.value;
    this.setState({ [dtlName]: dtlValue });
  };
  dtlHandleSubmit = (e) => {
    e.preventDefault();
    this.props.dtlOnSubmit(this.state);
  };
  render() {
    return (
      <div>
        <form className="col-md-6">
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Product Id
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtl_productId"
              value={this.state.dtl_productId}
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={this.dtlHandleChange}
            />
          </div>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                Product Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtl_productName"
              value={this.state.dtl_productName}
              onChange={this.dtlHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Quantity
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtl_quantity"
              value={this.state.dtl_quantity}
              onChange={this.dtlHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Price
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtl_price"
              value={this.state.dtl_price}
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
