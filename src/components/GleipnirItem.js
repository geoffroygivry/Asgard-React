import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";

const styles = theme => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  inline: {
    display: "inline"
  }
});

function GleipnirItem(props) {
  const { classes } = props;
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/Microsoft_Word.png" />
      </ListItemAvatar>
      <ListItemText
        button={true}
        primary={props.description}
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              className={classes.inline}
              color="textPrimary"
            >
              <small>To: </small> <strong>Ali Connors</strong>:
            </Typography>
            <Typography paragraph={true}>
              {"Sent a copy of the contract."}
            </Typography>
          </React.Fragment>
        }
      />
    </ListItem>
  );
}

GleipnirItem.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(GleipnirItem);
