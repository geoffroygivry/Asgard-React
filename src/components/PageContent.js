import React from "react";
import CardMaterialUI from "./CardMaterialUI";

const PageContent = props => {
  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--8-col">{props.mainGrid}</div>
      <div className="mdl-cell mdl-cell--4-col">{props.secondaryGrid}</div>
      <div className="mdl-cell mdl-cell--8-col"></div>
      <div className="mdl-cell mdl-cell--4-col">{<CardMaterialUI />}</div>
    </div>
  );
};

export default PageContent;
