import React, { useState } from "react";

export default function DtlProdctAddOrEdit({ dtlOnSubmit }) {
  const [Dtl_productId, setDtl_productID] = useState();
  const [Dtl_productName, setDtl_productName] = useState();
  const [Dtl_quantity, setDtl_quantity] = useState();
  const [Dtl_price, setDtl_price] = useState();

  const dtlHandlSubmit = (dtlEvevt) => {
    dtlEvevt.preventDefault();
    let dtlProduct = {
      Dtl_productId: Dtl_productId,
      Dtl_productName: Dtl_productName,
      Dtl_quantity: Dtl_quantity,
      Dtl_price: Dtl_price,
    };

    dtlOnSubmit(dtlProduct);
  };

  return (
    <div>
      <h2>Thêm mới sản phẩm</h2>
      <hr />
      <form>
        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Mã sản phẩm
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Mã sản phẩm"
            value={Dtl_productId}
            onChange={(ev) => setDtl_productID(ev.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Tên sản phẩm
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Tên sản phẩm"
            onChange={(ev) => setDtl_productName(ev.target.value)}
            value={Dtl_productName}
            aria-describedby="basic-addon2"
          />
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Số lượng
          </span>
          <input
            type="number"
            className="form-control"
            value={Dtl_quantity}
            onChange={(ev) => setDtl_quantity(ev.target.value)}
            placeholder="Số lượng"
            aria-describedby="basic-addon3"
          />
        </div>
        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Đơn giá
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Đơn giá"
            value={Dtl_price}
            onChange={(ev) => setDtl_price(ev.target.value)}
            aria-describedby="basic-addon4"
          />
        </div>
        <button
          className="btn btn-primary"
          name="dtlBtnAction"
          onClick={dtlHandlSubmit}
        >
          Thêm mới
        </button>
      </form>
    </div>
  );
}
