import React from "react";
import Topbar from "../components/Topbar";
import PageContent from "../components/PageContent";

class Asgard extends React.Component {
  state = {
    mainGrid: "fufu this is 8 col!!!!!!!!!!!!!!!!!!",
    secondaryGrid: "Yep this is a 4 col......................."
  };
  render() {
    return (
      <div className="mdl-layout mdl-js-layout">
        <Topbar />
        <main className="mdl-layout__content">
          <div className="page-content">
            <PageContent
              mainGrid={this.state.mainGrid}
              secondaryGrid={this.state.secondaryGrid}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Asgard;
