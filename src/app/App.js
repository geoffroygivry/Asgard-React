import React from "react";
import Topbar from "../components/Topbar";
import PageContent from "../components/PageContent";
// import UserCard from "../components/UserCard";
import TestThings from "../components/testClassGeoff";
import ActionBox from "../containers/newBox";
import "./App.css";

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
              mainGrid={<ActionBox />}
              secondaryGrid={<TestThings />}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Asgard;
