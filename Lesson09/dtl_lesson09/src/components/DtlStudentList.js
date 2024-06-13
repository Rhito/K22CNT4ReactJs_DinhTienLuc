import React, { Component } from "react";
function DtlStudentList({ renderDtlStudentList }) {
  console.log("Data: ", renderDtlStudentList);
  let dtlElement = renderDtlStudentList.map((dtlStudent, i) => {
    return (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{dtlStudent.dtlId}</td>
        <td>{dtlStudent.dtlName}</td>
        <td>{dtlStudent.dtlAge}</td>
        <td>{dtlStudent.dtlPhone}</td>
        <td>{dtlStudent.dtlEmail}</td>
        <td>{dtlStudent.dtlStatus ? "Hoạt động" : "Không hoạt động"}</td>
        <td>Edit | Delete</td>
      </tr>
    );
  });
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Mã sinh viên</th>
            <th scope="col">Họ tên</th>
            <th scope="col">Tuổi</th>
            <th scope="col">Điên thoại</th>
            <th scope="col">Email</th>
            <th scope="col">Trạng thái</th>
            <th scope="col">Chức năng</th>
          </tr>
        </thead>
        <tbody>{dtlElement}</tbody>
      </table>
    </div>
  );
}

export default DtlStudentList;
