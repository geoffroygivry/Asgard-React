import React, { Component } from "react";
import { DropzoneArea } from "material-ui-dropzone";

class DropzoneAreaBox extends Component {
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
  render() {
    return (
      <div>
        <DropzoneArea onChange={this.handleChange.bind(this)} />
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

export default DropzoneAreaBox;
