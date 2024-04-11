import React from "react";

export default function DTL_Func(props) {
  return (
    <div>
      <hr />
      <h2>Function Component Demo</h2>
      <h3>Sử dụng thuộc tính props</h3>
      <p>UserName: {props.userName}</p>
      <p>FullNameName: {props.fullName}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}
