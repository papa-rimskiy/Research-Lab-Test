import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper } from "@material-ui/core";
import { CssBaseline } from "@material-ui/core";
import Buttons from "./Buttons";
import Homepage from "./Homepage";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  mainPost: {
    height: "800px",
    width: "1440px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundColor: "#E7E2DE",
    backgroundBlendMode: "multiply",
    display: "flex"
  }
}));
function UserPage() {
  const classes = useStyles();

  return (
    <div className="user_page">
      <CssBaseline />
      <Paper
        className={classes.mainPost}
        style={{ backgroundImage: "url('../images/back-im.jpg')" }}
      >
        <Buttons />
        <Homepage />
      </Paper>
    </div>
  );
}

export default UserPage;