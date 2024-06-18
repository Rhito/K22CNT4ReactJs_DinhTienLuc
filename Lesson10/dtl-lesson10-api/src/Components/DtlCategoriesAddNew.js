import React, { useState } from "react";
import axios from "../api/DtlApi";

function DtlCategoriesAddNew({ dtlCloseAddNewForm, onAddNewSubmit }) {
  const dtlHandleClose = (ev) => {
    ev.preventDefault();
    dtlCloseAddNewForm(false);
  };

  const [dtlCategoryName, setDtlCategoryName] = useState();
  const [dtlCategoryStatus, setDtlCategoryStatus] = useState(false);

  const btnHandleSubmit = async (ev) => {
    ev.preventDefault();
    const dtlData = {
      dtlCategoryName: dtlCategoryName,
      dtlCategoryStatus: dtlCategoryStatus,
    };
    try {
      await axios.post("dtlCategory", dtlData);
      onAddNewSubmit();
      console.log(dtlData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div className="border m-3">
      <h2 className="m-4">Add new category</h2>
      <form className="m-3">
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Category Name
          </span>
          <input
            name="dtlCategoryName"
            value={dtlCategoryName}
            onChange={(ev) => setDtlCategoryName(ev.target.value)}
            type="text"
            className="form-control"
            placeholder="Category Name"
            aria-label="Category Name"
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Status
          </span>
          <select
            className="form-control"
            name="dtlCategoryStatus"
            value={dtlCategoryStatus}
            onChange={(ev) => setDtlCategoryStatus(ev.target.value === "true")}
          >
            <option value="" disabled>
              Select your option
            </option>
            <option value="true">Hoạt động</option>
            <option value="false">Ngưng hoạt động</option>
          </select>
        </div>
        <button className="btn btn-success mb-3" onClick={btnHandleSubmit}>
          Ghi lại
        </button>
        <button className="btn btn-danger mx-2 mb-3" onClick={dtlHandleClose}>
          Hủy bỏ
        </button>
      </form>
    </div>
  );
}

export default DtlCategoriesAddNew;
