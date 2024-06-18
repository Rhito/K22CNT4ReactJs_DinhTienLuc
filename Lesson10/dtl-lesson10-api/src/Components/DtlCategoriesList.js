function dtlCategoriesList({ dtlRenderCateLiest, dtlAddNewForm }) {
  let dtlCategoriesElements = dtlRenderCateLiest.map((el, i) => {
    return (
      <tr key={i}>
        <th scope="row">{i + 1}</th>
        <td>{el.dtlId}</td>
        <td>{el.dtlCategoryName}</td>
        <td>{el.dtlCategoryStatus ? "Đang hoạt động" : "Ngưng hoạt động"}</td>
      </tr>
    );
  });

  const dtlHandleAddNew = () => {
    dtlAddNewForm(true);
  };

  return (
    <div className="container m-2">
      <table className="table table-bordered my-2">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Category ID</th>
            <th scope="col">Category Name</th>
            <th scope="col">Status</th>
            <th scope="col">Functionality</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">{dtlCategoriesElements}</tbody>
      </table>
      <button className="btn btn-primary" onClick={dtlHandleAddNew}>
        Thêm mới
      </button>
    </div>
  );
}

export default dtlCategoriesList;
