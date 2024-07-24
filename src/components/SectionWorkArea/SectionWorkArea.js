import React, { useState, useEffect } from "react";
import "./SectionWorkArea.css";
import SectionAFeature1Search from "../Forms/SectionA/Feature1/SectionAFeature1Search";
import useAPI from "../../Hooks/useAPI";
import ResultTable from "../Tables/ResultTable";

const SectionWorkArea = ({
  workAreaProps = { sectionId: "", featureId: "", action: "" },
}) => {
  const { sectionId, featureId, action } = workAreaProps;
  const [searchCriteria, setSearchCriteria] = useState(null);

  const url = "http://localhost:5001/api/fetch-data";
  const { data, loading, error } = useAPI(url, "GET", searchCriteria);

  const onSubmitHandler = (formValues) => {
    setSearchCriteria(formValues);
  };

  let form;

  if (sectionId === "A" && featureId === "1" && action === "search") {
    form = (
      <SectionAFeature1Search
        onSubmit={onSubmitHandler}
      />
    );
  }

  // Since we no longer have columns, need to create them here and pass to Results Table.
  // TODO: Column definitions should come from backend;
  let keys, cols;
  if (data && data.length > 0) {
    keys = Object.keys(data[0]);
    cols = keys.map((key) => ({
      Header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key,
    }));
  }

  return (
    <div className="section-work-area">
      {form}
      {searchCriteria && (
        <>
          {loading && <div>Loading...</div>}
          {error && <div>Error: {error.message}</div>}
          {data && <ResultTable data={data} columns={cols}/>}
        </>
      )}
    </div>
  );
};

export default SectionWorkArea;
