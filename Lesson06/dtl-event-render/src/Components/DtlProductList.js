import React, { Component } from "react";

export default class DtlProductList extends Component {
  render() {
    let { renderProducts } = this.props;
    console.log("Products: ", renderProducts);

    let elementProduct = renderProducts.map((item, index) => {
      return (
        <>
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.title}</td>
            <td>{item.status ? "Hoạt động" : "Không hoạt động"}</td>
          </tr>
        </>
      );
    });
    return (
      <div>
        <h2>Danh sách sản phẩm</h2>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{elementProduct}</tbody>
        </table>
      </div>
    );
  }
}
