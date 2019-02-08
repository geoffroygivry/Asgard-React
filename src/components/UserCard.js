import React from "react";
import CardMaterialUI from "./CardMaterialUI";

import "./UserCard.css";

const UserCard = props => {
  return (
    <div className="demo-card-wide mdl-card mdl-shadow--2dp">
      <CardMaterialUI />
    </div>
  );
};

export default UserCard;
