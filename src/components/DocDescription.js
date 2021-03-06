import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import IconLabelButtons from "./ButtonSend";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: "100%"
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: "100%"
  },
  buttonSend: {
    position: "absolute"
  }
});

class DocDescription extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      owner: "Geoffroy Givry",
      multiline: "Please Describe your Document to be Blockchained."
    };
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state);
  };

  componentWillMount() {
    this.setState({ name: this.props.title });
  }

  render() {
    const { classes } = this.props;

    return (
      <form
        onSubmit={this.onFormSubmit}
        className={classes.container}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-read-only-input"
          label="Name of Document"
          defaultValue={this.props.title}
          onChange={this.handleChange("name")}
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: false
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Owner of the document"
          defaultValue="Geoffroy Givry"
          value={this.state.owner}
          onChange={this.handleChange("owner")}
          className={classes.textField}
          margin="normal"
        />

        <TextField
          required
          id="standard-multiline-flexible"
          label="Description"
          multiline
          rows="4"
          rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange("multiline")}
          className={classes.textField}
          margin="normal"
        />
        <div className="buttonSend">
          <IconLabelButtons labelText="Send" />
        </div>
      </form>
    );
  }
}

DocDescription.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DocDescription);
