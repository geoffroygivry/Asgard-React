import React from "react";

import { StyledDropZone } from "react-drop-zone";
import "react-drop-zone/dist/styles.css";

class DropzoneA extends React.Component {
  state = {
    files: []
  };

  addFile = (file, text) => {
    this.setState({ files: [...this.state.files, file] });
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <StyledDropZone onDrop={this.addFile} />
        <ul>
          {this.state.files.map(file => (
            <li>
              <i className="fa fa-file" /> {file.name} [{file.type}]
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DropzoneA;
