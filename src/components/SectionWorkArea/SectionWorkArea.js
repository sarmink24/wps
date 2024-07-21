import React from "react";
import './SectionWorkArea.css';
import SectionAFeature1Search from "../Forms/SectionA/Feature1/SectionAFeature1Search";

const SectionWorkArea = ({ workAreaProps = { sectionId: '', featureId: '', action: '' } }) => {
  const { sectionId, featureId, action } = workAreaProps;

  let form;

  const onSearchHandler = (formValues) => {
    console.log('---- search called with following values -----', formValues);
    // TODO: Make API call, and get results
  }

  if (sectionId === "A" && featureId === "1" && action === "search") {
    form = <SectionAFeature1Search onSearch={onSearchHandler}/>
  }

  return (
    <div className="section-work-area">
      {form}
    </div>
  );
};

export default SectionWorkArea;


