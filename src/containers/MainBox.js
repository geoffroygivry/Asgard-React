import React from "react";
import DropzoneAreaBox from "../components/DropZone";
import DocDescription from "../components/DocDescription";

const MainBox = props => {
  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--8-col">{<DropzoneAreaBox />}</div>
      <div className="mdl-cell mdl-cell--4-col">{<DocDescription />}</div>
    </div>
  );
};

export default MainBox;
