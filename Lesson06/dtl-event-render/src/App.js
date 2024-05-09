import React, { Component } from "react";
import DtlProductList from "./Components/DtlProductList";
import DtlProductAdd from "./Components/DtlProductAdd";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        { title: "Cabbage", id: 1, status: true },
        { title: "Garlic", id: 2, status: false },
        { title: "Apple", id: 3, status: false },
        { title: "Đinh Tiến Lực", id: 2210900038, status: true },
      ],
    };
  }
  dtlHandleSubmit = (par) => {
    console.log("App", par);
    let { products } = this.state;
    products.push(par);
    this.setState({
      products: products,
    });
  };
  render() {
    return (
      <div className="container border mt-5">
        <h1>Đinh Tiến Lực - Render Data - Event Form</h1>
        <hr />
        <DtlProductList renderProducts={this.state.products} />
        <hr />
        <DtlProductAdd onSummit={this.dtlHandleSubmit} />
      </div>
    );
  }
}
