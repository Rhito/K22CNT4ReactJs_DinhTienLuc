import React from "react";

export default function DTL(props) {
  return (
    <div>
      <h1>Welcom to, ReactJs</h1>
      <p>email: {props.email}</p>
      <p>phone: {props.phone}</p>
      <p>class: {props.class}</p>
    </div>
  );
}
