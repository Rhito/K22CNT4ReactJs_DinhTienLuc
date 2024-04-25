import React from "react";

export default function DTL_EventForm2() {
  // Định nghĩa các hàm xử lý sự kiện
  const evenHandleClick1 = (content) => {
    console.log("=======================================");
    console.log(content);
    console.log("=======================================");
  };
  return (
    <div>
      <h2>Event demo - function component</h2>
      <button onClick={evenHandleClick1("Định Tiến Lực")}>
        Gọi khi render
      </button>
      <button onClick={() => evenHandleClick1("K22CNT4-ReactJS")}>
        Gọi khi click
      </button>
    </div>
  );
}
