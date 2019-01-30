import React from "react";

class Topbar extends React.Component {
  render() {
    return (
      <div className="mdl-layout--fixed-header">
        <header className="mdl-layout__header">
          <div className="mdl-layout__header-row">
            <span className="mdl-layout-title">Gleipnir</span>
            <div className="mdl-layout-spacer" />
            <nav className="mdl-navigation mdl-layout--large-screen-only">
              <a
                className="mdl-navigation__link"
                href="https://github.com/geoffroygivry/"
              >
                Github
              </a>
              <a
                className="mdl-navigation__link"
                href="https://github.com/geoffroygivry/CyclopsVFX-Unity"
              >
                Unity
              </a>
              <a
                className="mdl-navigation__link"
                href="https://github.com/geoffroygivry/CyclopsVFX-Arges"
              >
                Arges
              </a>
              <a
                className="mdl-navigation__link"
                href="https://github.com/geoffroygivry/CyclopsVFX-Polyphemus"
              >
                Polyphemus
              </a>
            </nav>
          </div>
        </header>
      </div>
    );
  }
}

export default Topbar;
