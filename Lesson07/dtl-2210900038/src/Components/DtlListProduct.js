import React, { Component } from "react";

export default class DtlListProduct extends Component {
  render() {
    let { dtlRenderList } = this.props;

    let dtlElList = dtlRenderList.map((item, i) => {
      return (
        <>
          <tr key={i}>
            <td>{item.dtl_productId}</td>
            <td>{item.dtl_productName}</td>
            <td>{item.dtl_quantity}</td>
            <td>{item.dtl_price}</td>
          </tr>
        </>
      );
    });
    return (
      <div>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{dtlElList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
