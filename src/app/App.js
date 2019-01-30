import React from "react";
import Topbar from "../components/Topbar";
import PageContent from "../components/PageContent";

const Asgard = () => {
  return (
    <div class="mdl-layout mdl-js-layout">

        <Topbar />

      <main class="mdl-layout__content">
        <div class="page-content"> <PageContent /> </div>
      </main>
    </div>
  );
};

export default Asgard;
