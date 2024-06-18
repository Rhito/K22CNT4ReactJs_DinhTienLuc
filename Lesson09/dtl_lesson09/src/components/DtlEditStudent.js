import React from "react";
import { useState } from "react";

function DtlEditStudent({ dtlEditStudent, dtlEditDataStudent }) {
  const [dtlId, setDtlId] = useState();
  const [dtlName, setDtlName] = useState();
  const [dtlAge, setDtlAge] = useState();
  const [dtlPhone, setDtlPhone] = useState();
  const [dtlEmail, setDtlEmail] = useState();
  const [dtlStatus, setDtlStatus] = useState();

  const dtlHandleEditSubmit = (ev) => {
    ev.preventDefault();
    let dtlEditData = {
      dtlId: dtlId,
      dtlName: dtlName,
      dtlAge: dtlAge,
      dtlPhone: dtlPhone,
      dtlEmail: dtlEmail,
      dtlStatus: dtlStatus,
    };
    dtlEditDataStudent(dtlEditData);
  };

  return (
    <div>
      <hr />
      <h2>Sửa thông tin sinh viên</h2>
      <hr />
      <form>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Mã sinh viên
          </span>
          <input
            disabled
            type="text"
            className="form-control"
            placeholder="Mã sinh viên"
            value={dtlEditStudent.dtlId}
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
            defaultValue={dtlEditStudent.dtlName}
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
            defaultValue={dtlEditStudent.dtlAge}
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
            defaultValue={dtlEditStudent.dtlPhone}
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
            defaultValue={dtlEditStudent.dtlEmail}
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
            <option disabled>Chọn trạng thái</option>
            <option value="True" selected={dtlEditStudent.dtlStatus}>
              Hoạt động
            </option>
            <option value="False" selected={dtlEditStudent.dtlStatus === false}>
              Không hoạt động
            </option>
          </select>
        </div>

        <button
          className="btn btn-success px-4"
          name="dtlBtnAction"
          onClick={dtlHandleEditSubmit}
        >
          Sửa
        </button>
      </form>
    </div>
  );
}

export default DtlEditStudent;
