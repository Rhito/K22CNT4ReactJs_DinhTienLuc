import "./App.css";
import axios from "axios";
import DtlStudentList from "./components/DtlStudentList";
import { useEffect, useState } from "react";
import DtlAddNewStudent from "./components/DtlAddNewStudent";
function App() {
  // Sử dụng useState của hook
  const [dtlStudentList, setDtlStudentList] = useState([]);
  // Get data from api
  const dtlGetStudent = async () => {
    try {
      const response = await axios.get(
        "https://666a99ae7013419182cffd5e.mockapi.io/api/dtlv1/dtlStudents"
      );
      setDtlStudentList(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    dtlGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">Xử lý chức năng CRUD với API</h1>
      <DtlStudentList renderDtlStudentList={dtlStudentList} />
      <DtlAddNewStudent setDtlStudentList={setDtlStudentList} />
    </div>
  );
}

export default App;
