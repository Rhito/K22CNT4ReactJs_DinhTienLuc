import React from "react";
function DtlListTableName({
  renderDtlListTableName,
  onDtlDelete,
  onDtlEdit,
  onDtlAddNew,
  onDtlEditObject,
}) {
  console.log(renderDtlListTableName);
  const dtlElementTableName = renderDtlListTableName.map((dtlEl, dtlIndex) => {
    return (
      <tr key={dtlIndex}>
        <td>{dtlEl.DtlId}</td>
        <td>{dtlEl.DtlTbName}</td>
        <td>{dtlEl.DtlTbEmail}</td>
        <td>{dtlEl.DtlTbPhone}</td>
        <td>{dtlEl.DtlTbStatus == "true" ? "Active" : "Non-active"}</td>
        <td>
          <button
            className="btn btn-secondary"
            onClick={() => {
              dtlHandleEdit(dtlEl);
            }}
          >
            Edit
          </button>
          |
          <button
            className="btn btn-danger"
            onClick={() => {
              dtlHandleDelete(dtlEl.DtlId);
            }}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });
  const dtlHandleDelete = (dtlId) => {
    window.confirm("Bạn có muốn xóa dữ liệu có dtlId= " + dtlId) &&
      onDtlDelete(dtlId);
  };
  const dtlHandleEdit = (dtlObjectTable) => {
    onDtlEdit("edit");
    onDtlEditObject(dtlObjectTable);
  };
  const dtlHandleAddNew = () => {
    onDtlAddNew("add new");
  };
  return (
    <div>
      <div>
        <h2>Danh sách thông tin...</h2>
        <hr />
        <button
          className="btn btn-primary my-2"
          onClick={() => {
            dtlHandleAddNew();
          }}
        >
          Add New
        </button>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>DtlId</th>
              <th>DtlTbName</th>
              <th>DtlTbEmail</th>
              <th>DtlTbPhone</th>
              <th>DtlTbStatus</th>
              <th>Dtl: Chức năng</th>
            </tr>
          </thead>
          <tbody>{dtlElementTableName}</tbody>
        </table>
      </div>
    </div>
  );
}

export default DtlListTableName;
