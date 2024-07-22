import React, { useState } from "react";
import './SectionWorkArea.css';
import SectionAFeature1Search from "../Forms/SectionA/Feature1/SectionAFeature1Search";
import useUserData from "../../Hooks/useUserData";
import ResultTable from "../Tables/ResultTable";
import useSearchData from "../../Hooks/useSearchData";


const SectionWorkArea = ({ workAreaProps = { sectionId: '', featureId: '', action: '' } }) => {
  const { sectionId, featureId, action } = workAreaProps;
  const { userData, columns } = useUserData();
  const [searchCriteria, setSearchCriteria] = useState(null);

  let form;

  const onSearchHandler = (formValues) => {
    console.log('---- search called with following values -----', formValues);

    setSearchCriteria(formValues); // Update search criteria
  }

  const resultData = useSearchData(userData, searchCriteria); // Use the custom hook



  if (sectionId === "A" && featureId === "1" && action === "search") {
    form = <SectionAFeature1Search onSearch={onSearchHandler} />
  }

  return (
    <div className="section-work-area">
      {form}
      {resultData && (
        <ResultTable columns={columns} data={resultData} />
     )}
    </div>
  );
};

export default SectionWorkArea;


