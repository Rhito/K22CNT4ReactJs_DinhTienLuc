import { useEffect, useState } from "react";

function DtlUseEffect() {
  const [count, setCount] = useState(0);

  const dtlHandleClick = () => {
    setCount((c) => c + 1);
  };

  // Sử dụng hàm useEffect có 1 tham số
  useEffect(() => {
    document.title = `Đinh Tiến Lực: You clicked ${count} times`;
    console.log(`You clicked ${count} times`);
  });
  // useEffect: tham số thứ 2 là mảng rỗng
  useEffect(() => {
    console.log("Chạy lần duy nhất");
  }, []);
  // useEffect: [deps] - phụ thuộc vào biến, chạy khi biến thay dổi giá trị
  useEffect(() => {
    console.log(`UseEffect count clicked: ${count}`);
  }, [count]);
  return (
    <div>
      <h2>Demo - UseEffect: You clicked {count} times</h2>
      <button onClick={dtlHandleClick}>Click Click</button>
    </div>
  );
}

export default DtlUseEffect;
