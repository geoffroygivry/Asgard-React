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
  state = {
    name: "Cat in the Hat",
    age: "",
    multiline: "Controlled",
    currency: "EUR"
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="standard-read-only-input"
          label="Name of Document"
          defaultValue="Hello World"
          className={classes.textField}
          margin="normal"
          InputProps={{
            readOnly: true
          }}
        />
        <TextField
          required
          id="standard-required"
          label="Owner of the document"
          defaultValue="me"
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
