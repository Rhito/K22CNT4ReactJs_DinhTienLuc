import "./App.css";
import axios from "./dtl_apis/dtl-2210900038";
import { useState, useEffect } from "react";
import DtlListTableName from "./dtl_components/DtlListTableName";
import DtlFormTableName from "./dtl_components/DtlFormTableName";

function DtlApp() {
  // Đọc dữ liệu từ api
  const [dtlListTableName, setDtlListTableName] = useState([]);
  const dtlGetTableName = async () => {
    let dtlResp = await axios.get("/DtlTableName");
    setDtlListTableName(dtlResp.data);
  };

  useEffect(() => {
    dtlGetTableName();
  }, []);

  const dtlObjTableName = {
    DtlTbName: "Đinh Tiến Lực",
    DtlTbEmail: "Lasnguyen06@gmail.com",
    DtlTbPhone: "0372657743",
    DtlTbStatus: true,
    DtlId: "2210900038",
  };

  const [dtlTableName, setDtlTableName] = useState(dtlObjTableName);

  //Hàm xóa
  const dtlHandleDelete = async (dtlId) => {
    // console.log(dtlId);
    await axios.delete(`/DtlTableName/${dtlId}`);
    dtlGetTableName();
  };

  const [dtlHandleFunctionality, setDtlHandleFunctionality] = useState("");
  // Hàm Chức năng:  Thêm , Sửa
  const dtlHandleAddNew = (dtlFunc) => {
    setDtlHandleFunctionality(dtlFunc);
  };

  const dtlHandleEdit = (dtlFunc) => {
    setDtlHandleFunctionality(dtlFunc);
  };
  const dtlHandleObjEdit = (dtlObjEdit) => {
    setDtlTableName(dtlObjEdit);
  };

  const DtlReload = () => {
    dtlGetTableName();
  };

  console.log(dtlHandleFunctionality);
  return (
    <div className="container border my-3">
      <h1>Bài đánh giá hết học phần - Đinh Tiến Lực: 2210900038</h1>
      <hr />
      <DtlListTableName
        renderDtlListTableName={dtlListTableName}
        onDtlDelete={dtlHandleDelete}
        onDtlEdit={dtlHandleEdit}
        onDtlAddNew={dtlHandleAddNew}
        onDtlEditObject={dtlHandleObjEdit}
      />
      {dtlHandleFunctionality && (
        <DtlFormTableName
          renderDtlTableName={dtlTableName}
          renderDtlHandleFunctionality={dtlHandleFunctionality}
          onDtlReload={DtlReload}
          onDtlHandleFunctionality={setDtlHandleFunctionality}
        />
      )}
    </div>
  );
}

export default DtlApp;
