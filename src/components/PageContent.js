import React from "react";

class PageContent extends React.Component {
    state = {
        mainGrid: '',
        secondaryGrid: ''
    };
    render() {
        return (
        <div class="mdl-grid">
            <div class="mdl-cell mdl-cell--8-col">8</div>
            <div class="mdl-cell mdl-cell--4-col">4</div>
        </div>
        )
    }
}

export default PageContent;