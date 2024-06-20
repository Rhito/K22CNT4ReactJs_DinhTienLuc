import React from "react";
import axios from "../api/DtlApi";

function dtlCategoriesList({
  dtlRenderCateLiest,
  dtlAddNewForm,
  onDelete,
  onDtlEdit,
}) {
  // handle delete
  const dtlDelete = async (dtlId) => {
    if (
      window.confirm(`Do you really wanna delete "${dtlId}", Are you sure?`)
    ) {
      try {
        await axios.delete(`/dtlCategory/${dtlId}`);
        onDelete();
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    }
  };

  //handle edit
  const dtlHandleEdit = (el) => onDtlEdit(el);

  let dtlCategoriesElements = dtlRenderCateLiest.map((el, i) => {
    return (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{el.dtlId}</td>
        <td>{el.dtlCategoryName}</td>
        <td>{el.dtlCategoryStatus ? "Đang hoạt động" : "Ngưng hoạt động"}</td>
        <td>
          <button
            className="btn btn-danger"
            onClick={() => dtlDelete(el.dtlId)}
          >
            Delete
          </button>
          <button className="btn btn-primary" onClick={() => dtlHandleEdit(el)}>
            Edit
          </button>
        </td>
      </tr>
    );
  });

  const dtlHandleAddNew = () => {
    dtlAddNewForm(true);
  };

  return (
    <div className="container m-2">
      <table className="table table-bordered my-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category ID</th>
            <th scope="col">Category Name</th>
            <th scope="col">Status</th>
            <th scope="col">Functionality</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{dtlCategoriesElements}</tbody>
      </table>
      <button className="btn btn-primary" onClick={dtlHandleAddNew}>
        Thêm mới
      </button>
    </div>
  );
}

export default dtlCategoriesList;
