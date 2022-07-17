import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Grid } from "@material-ui/core";
import { createEntry } from "./redux/actions";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  homepage: {
    width: "50%",
    marginLeft: "225px"
  },
  greeting: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "24px",
    lineHeight: "33px",
    color: "#000000",
    marginTop: "64px"
  },
  user_photo: {
    width: "50px",
    height: "50px",
    borderRadius: "10px"
  },
  homepage_user: {
    marginTop: "280px"
  },
  user: {
    marginLeft: "25px"
  },
  arrow: {
    width: "12px",
    height: "12px",
    borderRadius: "50%"
  },
  logout: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 300,
    fontSize: "14px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.1px",
    color: "#0298A9;",
    cursor: "pointer",
    margin: "0px 0px 0px 4px"
  },
  user_name: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "24px",
    letterSpacing: "0.1px",
    color: "#0298A9;"
  },
  user_logout: {
    display: "flex",
    alignItems: "center",
    margin: "17px 0px 0px 75px"
  }
}));

function Homepage({createEntry}) {
  const classes = useStyles();
  const navigate = useNavigate();

  const logOut = () => {
    navigate(`/`);
    createEntry(false);
  };

  return (
    <div className={classes.homepage}>
      <div className={classes.homepage_header}>
        <Typography
          variant="h2"
          color="textPrimary"
          paragraph
          className={classes.greeting}
        >
          Welcome to the ...
        </Typography>
        <div className={classes.homepage_user}>
          <Grid container spacing={0}>
            <Grid item xs={1}>
              <Paper
                className={classes.user_photo}
                style={{ backgroundImage: "url('../images/avatar.svg')" }}
              ></Paper>
            </Grid>
            <Grid className={classes.user}>
              <Typography
                variant="h6"
                color="textPrimary"
                paragraph
                className={classes.user_name}
              >
                User/1
              </Typography>
            </Grid>
          </Grid>

          <div className={classes.user_logout}>
            <Paper
              className={classes.arrow}
              style={{ backgroundImage: "url('../images/arrow.svg')" }}
            ></Paper>
            <Typography
              variant="h6"
              color="textPrimary"
              paragraph
              className={classes.logout}
              onClick={logOut}
            >
              Logout
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  createEntry
};

export default connect(null, mapDispatchToProps) (Homepage);
