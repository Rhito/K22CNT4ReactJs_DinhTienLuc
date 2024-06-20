import React, { useEffect, useState } from "react";
import axios from "../api/DtlApi";

function DtlCategoriesAddNew({
  dtlCloseAddNewForm,
  onAddNewSubmit,
  renderDtlCategory,
}) {
  const dtlHandleClose = (ev) => {
    ev.preventDefault();
    dtlCloseAddNewForm(false);
  };

  const [dtlId, setDtlId] = useState("");
  const [dtlCategoryName, setDtlCategoryName] = useState();
  const [dtlCategoryStatus, setDtlCategoryStatus] = useState(false);

  useEffect(() => {
    setDtlId(renderDtlCategory.dtlId);
    setDtlCategoryName(renderDtlCategory.dtlCategoryName);
    setDtlCategoryStatus(renderDtlCategory.dtlCategoryStatus);
  }, [renderDtlCategory]);

  const btnHandleSubmit = async (ev) => {
    ev.preventDefault();

    let dtlData = {
      dtlId: 0,
      dtlCategoryName,
      dtlCategoryStatus,
    };
    if (dtlId === 0) {
      // them
      try {
        await axios.post("/dtlCategory", dtlData);
        console.log(dtlData);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    } else {
      // sua
      await axios.put(`/dtlCategory/${renderDtlCategory.dtlId}`, dtlData);
    }
    dtlCloseAddNewForm(false);
    onAddNewSubmit();
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
