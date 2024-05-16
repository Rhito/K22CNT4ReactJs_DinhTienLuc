import React, { useState } from "react";
function DtlUseState() {
  const [count, setCount] = useState(0);

  const [list, setList] = useState([1, 5]);

  // hàm xử lý sự kiện thêm ngẫu nhiên
  const dtlHandleList = () => {
    // setList([...list, Math.floor(Math.random() * 100)]);
    list.push(Math.floor(Math.random() * 100));
    setList([...list]);
  };
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <button onClick={() => setCount(0)}>reset</button>
      <hr />
      <h3>List: {list.toString()}</h3>
      <button onClick={dtlHandleList}>Thêm ngẫu nhiên</button>
    </div>
  );
}

export default DtlUseState;
