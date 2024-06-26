import React, { useState } from "react";

export default function DtlAddNewStudent({ dtlPostStudent }) {
  const [dtlId, setDtlId] = useState();
  const [dtlName, setDtlName] = useState();
  const [dtlAge, setDtlAge] = useState();
  const [dtlPhone, setDtlPhone] = useState();
  const [dtlEmail, setDtlEmail] = useState();
  const [dtlStatus, setDtlStatus] = useState();

  const dtlHandleSubmit = (dtlEvevt) => {
    dtlEvevt.preventDefault();
    let dtlData = {
      dtlId: dtlId,
      dtlName: dtlName,
      dtlAge: dtlAge,
      dtlPhone: dtlPhone,
      dtlEmail: dtlEmail,
      dtlStatus: dtlStatus,
    };
    dtlPostStudent(dtlData);
  };

  return (
    <div>
      <h2>Thêm mới sinh viên</h2>
      <hr />
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Mã sinh viên
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Mã sinh viên"
            value={dtlId}
            onChange={(ev) => setDtlId(ev.target.value)}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Tên sinh viên
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Tên sinh viên"
            value={dtlName}
            onChange={(ev) => setDtlName(ev.target.value)}
            aria-describedby="basic-addon2"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Tuổi
          </span>
          <input
            type="number"
            className="form-control"
            value={dtlAge}
            onChange={(ev) => setDtlAge(ev.target.value)}
            placeholder="Tuổi"
            aria-describedby="basic-addon3"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Số điện thoại
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Số điện thoại"
            value={dtlPhone}
            onChange={(ev) => setDtlPhone(ev.target.value)}
            aria-describedby="basic-addon4"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Email"
            value={dtlEmail}
            onChange={(ev) => setDtlEmail(ev.target.value)}
            aria-describedby="basic-addon4"
          />
        </div>

        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Trạng thái
          </span>
          <select
            className="form-select"
            placeholder="Chọn trạng thái"
            aria-label="Default select example"
            onChange={(ev) => setDtlStatus(ev.target.value)}
          >
            <option defaultValue="">Chọn trạng thái</option>
            <option value="True">Hoạt động</option>
            <option value="False">Không hoạt động</option>
          </select>
        </div>

        <button
          className="btn btn-success"
          name="dtlBtnAction"
          onClick={dtlHandleSubmit}
        >
          Thêm mới
        </button>
      </form>
    </div>
  );
}
