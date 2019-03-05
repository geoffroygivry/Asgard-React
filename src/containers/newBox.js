import React, { Component } from "react";
import DocDescription from "../components/DocDescription";
import { DropzoneArea } from "material-ui-dropzone";

class ActionBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: []
    };
  }
  handleChange(files) {
    this.setState({
      files: files
    });
  }

  onSearchSubmit(term) {
    console.log(term);
  }

  render() {
    return (
      <div className="mdl-grid">
        <div className="mdl-cell mdl-cell--8-col">
          {<DropzoneArea onChange={this.handleChange.bind(this)} />}
        </div>
        <div className="mdl-cell mdl-cell--4-col">
          {this.state.files.map(file => (
            <DocDescription title={file.name} onSubmit={this.onSearchSubmit} />
          ))}
        </div>
      </div>
    );
  }
}

export default ActionBox;
