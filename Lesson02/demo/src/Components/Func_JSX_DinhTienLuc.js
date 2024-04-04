import React from "react";

export default function Func_JSX_DinhTienLuc(props) {
  const inf = {
    name: "Đinh Tiến Lực",
    age: 20,
  };
  return (
    <div>
      <h2>Function components demo</h2>
      <h3>
        Welcome, {inf.name} u're {inf.age} year old
      </h3>
      <h3>
        props <br />
        fullname: {props.fullname}
        <br />
        age: {props.age} <br />
      </h3>
    </div>
  );
}
