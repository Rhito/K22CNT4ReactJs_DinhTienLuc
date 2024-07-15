import axios from "../dtl_apis/dtl-2210900038";
import React, { useEffect, useState } from "react";
function DtlFormTableName({
  renderDtlTableName,
  onDtlReload,
  renderDtlHandleFunctionality,
  onDtlHandleFunctionality,
}) {
  const [dtlId, setDtlId] = useState(renderDtlTableName.DtlId);
  const [dtlTbName, setDtlTbName] = useState(renderDtlTableName.DtlTbName);
  const [dtlTbEmail, setDtlTbEmail] = useState(renderDtlTableName.DtlTbEmail);
  const [dtlTbPhone, setDtlTbPhone] = useState(renderDtlTableName.DtlTbPhone);
  const [dtlTbStatus, setDtlTbStatus] = useState(
    renderDtlTableName.DtlTbStatus
  );
  let methodTitle;

  if (renderDtlHandleFunctionality === "add new") methodTitle = "thêm mới";
  if (renderDtlHandleFunctionality === "edit") methodTitle = "sửa";

  useEffect(() => {
    setDtlId(renderDtlTableName.DtlId);
    setDtlTbName(renderDtlTableName.DtlTbName);
    setDtlTbEmail(renderDtlTableName.DtlTbEmail);
    setDtlTbPhone(renderDtlTableName.DtlTbPhone);
    setDtlTbStatus(renderDtlTableName.DtlTbStatus);
  }, [renderDtlTableName]);

  const dtlHandleSubmit = async (dtlEvent) => {
    dtlEvent.preventDefault();
    const dtlObjTableName = {
      DtlTbName: dtlTbName,
      DtlTbEmail: dtlTbEmail,
      DtlTbPhone: dtlTbPhone,
      DtlTbStatus: dtlTbStatus,
      DtlId: dtlId,
    };

    try {
      if (renderDtlHandleFunctionality === "edit") {
        // Sửa Thêm dữ liệu trong api
        await axios.put(
          `/DtlTableName/${dtlObjTableName.DtlId}`,
          dtlObjTableName
        );
      } else if (renderDtlHandleFunctionality === "add new") {
        // Thêm dữ liệu trong api
        await axios.post("/DtlTableName", dtlObjTableName);
      }
      onDtlReload();
      onDtlHandleFunctionality("");
    } catch (error) {
      console.error("There was an error updating or adding the data:", error);
    }
  };

  return (
    <div>
      <h2>Form xử lý dữ liệu {methodTitle}</h2>

      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="dtlId">
            dtlId
          </span>
          <input
            type="text"
            value={dtlId}
            onChange={(dtlEv) => setDtlId(dtlEv.target.value)}
            className="form-control"
            placeholder="dtlId"
            aria-label="dtlId"
            aria-describedby="dtlId"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="dtlTbName">
            dtlTbName
          </span>
          <input
            type="text"
            onChange={(dtlEv) => setDtlTbName(dtlEv.target.value)}
            value={dtlTbName}
            className="form-control"
            placeholder="dtlTbName"
            aria-label="dtlTbName"
            aria-describedby="dtlTbName"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="dtlTbEmail">
            dtlTbEmail
          </span>
          <input
            type="text"
            value={dtlTbEmail}
            onChange={(dtlEv) => setDtlTbEmail(dtlEv.target.value)}
            className="form-control"
            placeholder="Lasnguyen06@gmail.com"
            aria-label="dtlTbEmail"
            aria-describedby="dtlTbEmail"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="dtlTbPhone">
            dtlTbPhone
          </span>
          <input
            type="text"
            value={dtlTbPhone}
            onChange={(dtlEv) => setDtlTbPhone(dtlEv.target.value)}
            className="form-control"
            placeholder="0372657743"
            aria-label="dtlTbPhone"
            aria-describedby="dtlTbPhone"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="dtlTbStatus">
            dtlTbStatus
          </span>
          <select
            className="form-control"
            value={dtlTbStatus}
            name="dtlTbStatus"
            id="dtlTbStatus"
            onChange={(dtlEv) => setDtlTbStatus(dtlEv.target.value)}
          >
            <option value="true">Active</option>
            <option value="false">Non-Active</option>
          </select>
        </div>
        <button
          onClick={dtlHandleSubmit}
          className="btn btn-success my-2"
          name="btnDtlSave"
        >
          DTL: Save
        </button>
      </form>
    </div>
  );
}

export default DtlFormTableName;
