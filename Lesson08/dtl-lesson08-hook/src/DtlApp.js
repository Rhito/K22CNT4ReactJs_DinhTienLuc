import "./App.css";
import { React, useState } from "react";
import DtlListProduct from "./Components/DtlListProduct";
import DtlProdctAddOrEdit from "./Components/DtlProdctAddOrEdit";

function DtlApp() {
  // mock data
  const Dtl_Products = [
    {
      Dtl_productId: "2210900038",
      Dtl_productName: "Đinh Tiến Lực",
      Dtl_quantity: 1,
      Dtl_price: 100000000,
    },
    {
      Dtl_productId: "P002",
      Dtl_productName: "IPhone 12",
      Dtl_quantity: 20,
      Dtl_price: 1250,
    },
    {
      Dtl_productId: "P003",
      Dtl_productName: "IPhone 13",
      Dtl_quantity: 10,
      Dtl_price: 1500,
    },
  ];

  // Sử dụng hàm useState của hook
  const [dtlListProduct, setDtlListProduct] = useState(Dtl_Products);

  const dtlHandleSubmit = (dtlProduct) => {
    console.log("Add or Edit:", dtlProduct);
    // them moi vao dtlList
    setDtlListProduct((dtlPre) => {
      return [...dtlPre, dtlProduct];
    });
  };

  return (
    <div className="container border mt-5 p-3">
      <h1>Xử lý chức năng CRUD - Hook</h1>
      <hr />
      <DtlListProduct renderDtlProducts={dtlListProduct} />
      <DtlProdctAddOrEdit dtlOnSubmit={dtlHandleSubmit} />
    </div>
  );
}

export default DtlApp;
