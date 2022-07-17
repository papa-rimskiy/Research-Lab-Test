import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  buttons: {
    width: "50%",
    position: "relative"
  },
  button_market: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "20px",
    background: "rgba(134, 189, 36, 0.3)",
    transform: "rotate(45deg)",
    top: "65px",
    left: "340px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button_market_isAuth: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "20px",
    background: "#86BD24",
    transform: "rotate(45deg)",
    top: "65px",
    left: "340px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.6)"
    }
  },
  button_projects: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "20px",
    background: "rgba(65, 69, 73, 0.3)",
    transform: "rotate(45deg)",
    top: "190px",
    left: "80px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button_projects_isAuth: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "20px",
    background: "#414549",
    transform: "rotate(45deg)",
    top: "190px",
    left: "80px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.6)"
    }
  },
  button_user: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "20px",
    background: "rgba(2, 152, 169, 0.3);",
    transform: "rotate(45deg)",
    top: "385px",
    left: "275px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
  },
  button_user_isAuth: {
    position: "absolute",
    width: "250px",
    height: "250px",
    borderRadius: "20px",
    background: "#0298A9",
    transform: "rotate(45deg)",
    top: "385px",
    left: "275px",
    display: "flex",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    cursor: "pointer",
    "&:hover": {
      boxShadow: "0px 8px 8px rgba(0, 0, 0, 0.6)"
    }
  },
  button_text: {
    fontWeight: "700",
    fontSize: "24px",
    lineHeight: "18px",
    letterSpacing: "0.50px",
    textTransform: "uppercase",
    color: "#FFFFFF",
    transform: "rotate(-45deg)",
    margin: 0
  }
}));

function Buttons({ isAuth }) {
  var a = 1;
  const classes = useStyles();
  console.log(isAuth);
  return (
    <div className={classes.buttons}>
      <div
        className={
          isAuth === false
            ? classes.button_market
            : classes.button_market_isAuth
        }
      >
        <div>
          <Typography>
            <h5 className={classes.button_text}>market</h5>
          </Typography>
        </div>
      </div>
      <div
        className={
          isAuth === false
            ? classes.button_projects
            : classes.button_projects_isAuth
        }
      >
        <Typography>
          <h5 className={classes.button_text}>projects</h5>
        </Typography>
      </div>
      <div
        className={
          isAuth === false ? classes.button_user : classes.button_user_isAuth
        }
      >
        <Typography>
          <h5 className={classes.button_text}>user</h5>
        </Typography>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.isAuth.isAuth
  };
};
export default connect(mapStateToProps, null)(Buttons);
