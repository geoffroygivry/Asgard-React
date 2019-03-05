import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
import "./buttonSend.css";

const styles = theme => ({
  buttonSend: {
    margin: theme.spacing.unit,
    width: "100%"
  },
  leftIcon: {
    marginRight: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  },
  iconSmall: {
    fontSize: 20
  }
});

function IconLabelButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button
        variant="raised"
        color="primary"
        type="submit"
        className={classes.buttonSend}
      >
        {props.labelText}
        {/* This Button uses a Font Icon, see the installation instructions in the docs. */}
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
    </div>
  );
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(IconLabelButtons);
