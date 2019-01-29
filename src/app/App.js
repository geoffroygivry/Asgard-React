import React from "react";
import Topbar from "../components/Topbar";

const Asgard = () => {
  return (
    <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
      <header class="mdl-layout__header">
        <Topbar />
      </header>
      <main class="mdl-layout__content">
        <div class="page-content">Hello World!</div>
      </main>
    </div>
  );
};

export default Asgard;
