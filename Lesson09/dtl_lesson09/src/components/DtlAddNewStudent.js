import React, { useState } from "react";
import axios from "axios";

export default function DtlAddNewStudent({ setDtlStudentList }) {
  const [dtlId, setDtlId] = useState();
  const [dtlName, setDtlName] = useState();
  const [dtlAge, setDtlAge] = useState();
  const [dtlPhone, setDtlPhone] = useState();
  const [dtlEmail, setDtlEmail] = useState();
  const [dtlStatus, setDtlStatus] = useState();

  const dtlHandlSubmit = async (dtlEvevt) => {
    dtlEvevt.preventDefault();
    let dtlData = {
      dtlId: dtlId,
      dtlName: dtlName,
      dtlAge: dtlAge,
      dtlPhone: dtlPhone,
      dtlEmail: dtlEmail,
      dtlStatus: dtlStatus,
    };

    try {
      const response = await axios.post(
        "https://666a99ae7013419182cffd5e.mockapi.io/api/dtlv1/dtlStudents",
        dtlData
      );
      setDtlStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      <h2>Thêm mới sinh viên</h2>
      <hr />
      <form>
        <div class="input-group mb-3">
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
        <div class="input-group mb-3">
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
        <div class="input-group mb-3">
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
        <div class="input-group mb-3">
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

        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Email
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Email"
            value={dtlEmail}
            onChange={(ev) => setDtlEmail(ev.target.value)}
            aria-describedby="basic-addon4"
          />
        </div>

        <div class="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            Trạng thái
          </span>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(ev) => setDtlStatus(ev.target.value)}
          >
            <option selected>Chọn trạng thái</option>
            <option value="True">Hoạt động</option>
            <option value="False">Không hoạt động</option>
          </select>
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
