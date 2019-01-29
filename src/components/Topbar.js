import React from "react";

class Topbar extends React.Component {
  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">Title</span>
            <div class="mdl-layout-spacer" />
            <nav class="mdl-navigation mdl-layout--large-screen-only">
              <a
                class="mdl-navigation__link"
                href="https://github.com/geoffroygivry/"
              >
                My github
              </a>
              <a
                class="mdl-navigation__link"
                href="https://github.com/geoffroygivry/CyclopsVFX-Unity"
              >
                My github Cyclops Unity
              </a>
              <a
                class="mdl-navigation__link"
                href="https://github.com/geoffroygivry/CyclopsVFX-Arges"
              >
                My github Cyclops Arges
              </a>
              <a
                class="mdl-navigation__link"
                href="https://github.com/geoffroygivry/CyclopsVFX-Polyphemus"
              >
                My github Cyclops Polyphemus
              </a>
            </nav>
          </div>
        </header>
        <div class="mdl-layout__drawer">
          <span class="mdl-layout-title">Title</span>
          <nav class="mdl-navigation">
            <a
              class="mdl-navigation__link"
              href="https://github.com/geoffroygivry/"
            >
              My github
            </a>
            <a
              class="mdl-navigation__link"
              href="https://github.com/geoffroygivry/CyclopsVFX-Unity"
            >
              My github Cyclops Unity
            </a>
            <a
              class="mdl-navigation__link"
              href="https://github.com/geoffroygivry/CyclopsVFX-Arges"
            >
              My github Cyclops Arges
            </a>
            <a
              class="mdl-navigation__link"
              href="https://github.com/geoffroygivry/CyclopsVFX-Polyphemus"
            >
              My github Cyclops Polyphemus
            </a>
          </nav>
        </div>
        <main class="mdl-layout__content">
          <div class="page-content">fufu!</div>
        </main>
      </div>
    );
  }
}

export default Topbar;
