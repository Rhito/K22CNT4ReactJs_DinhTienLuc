import React, { Component } from "react";
import DtlListProduct from "./Components/DtlListProduct";
import DtlProductAdd from "./Components/DtlProductAdd";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dtl_Products: [
        {
          dtl_productId: "2210900038",
          dtl_productName: "Đinh Tiến Lực",
          dtl_quantity: 1,
          dtl_price: 1000000,
        },
        {
          dtl_productId: "P002",
          dtl_productName: "IPhone 12",
          dtl_quantity: 20,
          dtl_price: 1250,
        },
        {
          dtl_productId: "P003",
          dtl_productName: "IPhone 13",
          dtl_quantity: 10,
          dtl_price: 1500,
        },
      ],
    };
  }
  dtlHandleSubmit = (par) => {
    let { dtl_Products } = this.state;

    dtl_Products.push(par);
    this.setState({
      dtl_Products: dtl_Products,
    });
  };

  render() {
    return (
      <div>
        <h2 className="titleName">Đinh Tiến Lực - 2210900038</h2>
        <DtlListProduct dtlRenderList={this.state.dtl_Products} />
        <hr />
        <DtlProductAdd dtlOnSubmit={this.dtlHandleSubmit} />
      </div>
    );
  }
}
