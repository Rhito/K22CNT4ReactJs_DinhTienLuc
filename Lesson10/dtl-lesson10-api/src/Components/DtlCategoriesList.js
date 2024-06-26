import React from "react";
import axios from "../api/DtlApi";

function dtlCategoriesList({ dtlRenderCateLiest, dtlAddNewForm, onDelete }) {
  const dtlDelete = async (dtlId) => {
    try {
      await axios.delete(`/dtlCategory/${dtlId}`);
      onDelete();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

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
          <button>Edit</button>
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
