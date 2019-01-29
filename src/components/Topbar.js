import React from "react";

class Topbar extends React.Component {
  state = { content: null };
  render() {
    return (
      <div class="mdl-layout__header-row">
        <span class="mdl-layout-title">
          Gleipnir <small>Asgard</small>
        </span>
        <div class="mdl-layout-spacer" />
        <nav class="mdl-navigation mdl-layout--large-screen-only">
          <a
            class="mdl-navigation__link"
            href="https://github.com/geoffroygivry/"
          >
            Github
          </a>
          <a
            class="mdl-navigation__link"
            href="https://github.com/geoffroygivry/CyclopsVFX-Unity"
          >
            Unity
          </a>
          <a
            class="mdl-navigation__link"
            href="https://github.com/geoffroygivry/CyclopsVFX-Arges"
          >
            Arges
          </a>
          <a
            class="mdl-navigation__link"
            href="https://github.com/geoffroygivry/CyclopsVFX-Polyphemus"
          >
            Polyphemus
          </a>
        </nav>
      </div>
    );
  }
}

export default Topbar;
