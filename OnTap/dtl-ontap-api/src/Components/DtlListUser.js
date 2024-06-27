import React from "react";

export default function DtlListUser({ renderDtlListUsers }) {
  const displayDtlListUsers = renderDtlListUsers.map((el, i) => {
    return (
      <>
        <tr key={i}>
          <td>{el.id}</td>
          <td>{el.UserName}</td>
          <td>{el.Password}</td>
          <td>{el.Email}</td>
          <td>{el.Phone}</td>
        </tr>
      </>
    );
  });
  return (
    <div className="row">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>ID</th>
            <th>UserName</th>
            <th>Password</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>{displayDtlListUsers}</tbody>
      </table>
    </div>
  );
}
