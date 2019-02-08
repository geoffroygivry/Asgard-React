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
  },
  alignRight: {
    float: "right"
  }
});

const onclick = () => {
  console.log("You've clicked me!!");
};

function GleipnirItem(props) {
  const { classes } = props;
  return (
    <ListItem alignItems="flex-start" button onClick={onclick} tag="a">
      <ListItemAvatar>
        <Avatar alt="Remy Sharp" src="/Microsoft_Word.png" />
      </ListItemAvatar>
      <ListItemText
        primary={
          <React.Fragment>
            <Typography variant="h6">{props.description}</Typography>
            <Typography component="span" className={classes.alignRight}>
              <small>13/04/2018 at 13:45</small>
            </Typography>
          </React.Fragment>
        }
        secondary={
          <React.Fragment>
            <Typography
              component="span"
              className={classes.inline}
              color="textPrimary"
            >
              <small>To: </small> <strong>{props.receiver}</strong>:
            </Typography>
            <Typography paragraph={true}>
              <br />
              Sent a copy of the contract.
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
