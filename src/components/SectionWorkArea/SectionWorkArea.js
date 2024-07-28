import React, { useState, useEffect } from "react";
import "./SectionWorkArea.css";
import SectionAFeature1Search from "../Forms/SectionA/Feature1/SectionAFeature1Search";
import useAPI from "../../Hooks/useAPI";
import ResultTable from "../Tables/ResultTable";
import SectionAFeature1Create from "../Forms/SectionA/Feature1/SectionAFeature1Create";

const SectionWorkArea = ({
  workAreaProps = { sectionId: "", featureId: "", action: "" },
}) => {
  const { sectionId, featureId, action } = workAreaProps;
  const [searchCriteria, setSearchCriteria] = useState(null);
  const [formData, setFormData] = useState(null);

  const url = action === "search" ? "http://localhost:5001/api/fetch-data" : "http://localhost:5001/api/submit-form";
  const method = action === "search" ? "GET" : "POST";
  const params = action === "search" ? searchCriteria : formData;

  const { data, columns, loading, error } = useAPI(url, method, params);

  const onSubmitHandler = (formValues) => {
    if (action === "search") {
      setSearchCriteria(formValues);
    } else if (action === "create") {
      setFormData(formValues);
    } else {
      return action; // You can handle other actions or provide a default behavior if needed
    }
  };

  let form;

  if (sectionId === "A" && featureId === "1" && action === "search") {
    form = <SectionAFeature1Search onSubmit={onSubmitHandler} />;
  }

  if (sectionId === "A" && featureId === "1" && action === "create") {
    form = <SectionAFeature1Create onSubmit={onSubmitHandler} />;
  }

  // Since we no longer have columns, need to create them here and pass to Results Table.
  // TODO: Column definitions should come from backend;
  // let keys, cols;
  // if (data && data.length > 0) {
  //   keys = Object.keys(data[0]);
  //   cols = keys.map((key) => ({
  //     Header: key.charAt(0).toUpperCase() + key.slice(1),
  //     accessor: key,
  //   }));
  // }

  return (
    <div className="section-work-area">
      {form}
      {searchCriteria && (
        <>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data && <ResultTable data={data} columns={columns} />}
        </>
      )}
      { formData && (
        <div>
          <h3>Form Data Submitted</h3>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </div>
      )}
      <ResultTable data={data} columns={columns} />
    </div>
  );
};

export default SectionWorkArea;

