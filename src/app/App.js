import React from "react";
import Topbar from "../components/Topbar";
import PageContent from "../components/PageContent";
import TableClients from "../components/TableClients";
import UserCard from "../components/UserCard";
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
              mainGrid={<TableClients />}
              secondaryGrid={<UserCard />}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default Asgard;
