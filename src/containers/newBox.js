import React, { Component } from "react";
import DocDescription from "../components/DocDescription";
import { DropzoneArea } from "material-ui-dropzone";
import hyperledger from "../apis/hyperledger";

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

  onSearchSubmit = async term => {
    console.log(term);
    await hyperledger.post("/GleipnirAsset", {
      $class: "org.gleipnir.mainnetwork.GleipnirAsset",
      assetId: term.name,
      owner: `org.gleipnir.mainnetwork.GleipnirParticipant#${term.owner}`,
      value: term.multiline
    });
  };

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
