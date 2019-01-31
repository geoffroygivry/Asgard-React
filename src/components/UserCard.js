import React from "react";
import "./UserCard.css";

const UserCard = props => {
  return (
    <div class="demo-card-wide mdl-card mdl-shadow--2dp">
      <div class="mdl-card__title">
        <h2 class="mdl-card__title-text">Geoffroy Givry</h2>
        <button class="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
          <i class="material-icons">add</i>
        </button>
      </div>

      <div class="mdl-card__supporting-text">
        <strong>AnthraciteLab</strong>
        <div className="email-user">
          <small>geoffroy@anthracitelab.com</small>
        </div>
      </div>
      <div class="mdl-card__actions mdl-card--border mdl-card__supporting-text">
        <div className="description-user">
          <small className="very-small">Tel: +44(0)7895258575</small>
        </div>
      </div>
      <div class="mdl-card__menu">
        <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
          <i class="material-icons">share</i>
        </button>
      </div>
    </div>
  );
};

export default UserCard;
