import React from "react";

function DtlListProduct({ renderDtlProducts }) {
  console.log("List product", renderDtlProducts);

  let dtlTong = 0;
  let dtlElementProduct = renderDtlProducts.map((DtlProduct, index) => {
    dtlTong += DtlProduct.Dtl_price * DtlProduct.Dtl_quantity;
    return (
      <>
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{DtlProduct.Dtl_productId}</td>
          <td>{DtlProduct.Dtl_productName}</td>
          <td>{DtlProduct.Dtl_quantity}</td>
          <td>
            {new Intl.NumberFormat("vi-VE", {
              style: "currency",
              currency: "VND",
            }).format(DtlProduct.Dtl_price)}
          </td>
          <td>
            {new Intl.NumberFormat("vi-VE", {
              style: "currency",
              currency: "VND",
            }).format(DtlProduct.Dtl_price * DtlProduct.Dtl_quantity)}
          </td>
          <td>
            <button className="btn btn-success mx-1">
              <i class="fa-solid fa-pen-to-square"></i>
            </button>
            <button className="btn btn-danger mx-1">
              <i class="fa-solid fa-trash"></i>
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <div>
      <h2>DANH SÁCH SẢN PHẨM</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>#</th>
            <th>Mã sản phẩm</th>
            <th>Tên sản Phẩm</th>
            <th>Số lượng</th>
            <th>Đơn giá</th>
            <th>Thành tiền</th>
            <th>Chức năng</th>
          </tr>
        </thead>
        <tbody>{dtlElementProduct}</tbody>
        <tfoot>
          <tr>
            <th colSpan={5} className="text-end">
              Tổng cộng:
            </th>
            <th colSpan={2}>
              {new Intl.NumberFormat("vi-VE", {
                style: "currency",
                currency: "VND",
              }).format(dtlTong)}
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default DtlListProduct;
