import { React, useEffect, useState } from "react";
import "./App.css";
import axios from "./api/DtlApi";
import DtlCategoriesList from "./Components/DtlCategoriesList";
import DtlCategoriesAddNew from "./Components/DtlCategoriesAddNew";

function DtlApp() {
  //  Create var
  const [dtlCategory, setDtlCategory] = useState([]);
  // set form status
  const [dtlAddNewForm, setDtlAddNewForm] = useState(false);
  // set data Edit
  const [dtlCategoryEdit, setDtlCategoryEdit] = useState([]);

  // Handle Edit
  const dtlHandleEdit = (dtlEditData) => {
    setDtlCategoryEdit(dtlEditData);
    setDtlAddNewForm(true);
  };

  // Call API
  const getCategories = async () => {
    try {
      const dtlCateResponse = await axios.get("/dtlCategory");
      setDtlCategory(dtlCateResponse.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="container border my-3">
      <h1 className="text-center">Đinh Tiến Lực - Call API</h1>
      <DtlCategoriesList
        dtlRenderCateLiest={dtlCategory}
        dtlAddNewForm={setDtlAddNewForm}
        onDelete={getCategories}
        onDtlEdit={dtlHandleEdit}
      />
      {dtlAddNewForm && (
        <DtlCategoriesAddNew
          dtlCloseAddNewForm={setDtlAddNewForm}
          onAddNewSubmit={getCategories}
          renderDtlCategory={dtlCategoryEdit}
        />
      )}
    </div>
  );
}

export default DtlApp;
