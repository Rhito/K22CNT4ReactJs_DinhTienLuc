import "./App.css";
import axios from "axios";
import DtlStudentList from "./components/DtlStudentList";
import { useEffect, useState } from "react";
import DtlAddNewStudent from "./components/DtlAddNewStudent";
import DtlEditStudent from "./components/DtlEditStudent";
function App() {
  // Sử dụng useState của hook
  const [dtlStudentList, setDtlStudentList] = useState([]);
  const [dtlEditStudent, setDtlEditStudent] = useState([]);
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

  const dtlPostStudent = async (dtlData) => {
    try {
      await axios.post(
        "https://666a99ae7013419182cffd5e.mockapi.io/api/dtlv1/dtlStudents",
        dtlData
      );
      dtlGetStudent();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  const dtlEditDataStudent = async (dtlEditData) => {
    try {
      await axios.put(
        `https://666a99ae7013419182cffd5e.mockapi.io/api/dtlv1/dtlStudents/${dtlEditStudent.dtlId}`,
        dtlEditData
      );
      dtlGetStudent();
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const dtlEdit = (data) => {
    setDtlEditStudent(data);
  };

  useEffect(() => {
    dtlGetStudent();
  }, []);

  return (
    <div className="container border mt-5 p-3">
      <h1 className="text-center my-3">Xử lý chức năng CRUD với API</h1>
      <DtlStudentList
        renderDtlStudentList={dtlStudentList}
        dtlGetStudent={dtlGetStudent}
        dtlEdit={dtlEdit}
      />
      <DtlAddNewStudent dtlPostStudent={dtlPostStudent} />
      <DtlEditStudent
        dtlEditStudent={dtlEditStudent}
        dtlGetStudent={dtlGetStudent}
        dtlEditDataStudent={dtlEditDataStudent}
      />
    </div>
  );
}

export default App;
