import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, TextField, Typography } from "@material-ui/core";
import { Formik, Form, useFormik } from "formik";
import Button from "@mui/material/Button";
import Checkbox from "@material-ui/core/CheckBox";
import { useNavigate } from "react-router-dom";
import { createEntry } from "./redux/actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  registration: {
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
  registration_form: {
    marginTop: "165px"
  },
  signIn: {
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: 500,
    fontSize: "24px",
    lineHeight: "24px",
    display: "flex",
    alignItems: "center",
    letterSpacing: "0.1px",
    color: "#000000"
  },
  field_email: {
    width: "300px",
    height: "50px",
    border: "1px solid #414549",
    borderRadius: "4px",
    paddingLeft: "15px",
    padding: "15px"
  },
  forgot_password: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.7)",
    cursor: "pointer"
  },
  button_signin: {
    width: "160px",
    height: "50px",
    borderRadius: "4px"
  },
  remember_password: {
    fontFamily: "Open Sans",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "12px",
    lineHeight: "16px",
    display: "flex",
    alignItems: "center",
    color: "rgba(0, 0, 0, 0.7)",
    cursor: "pointer"
  },
  search__form_input: {
    width: "300px",
    height: "50px",
    border: "1px solid #414549",
    borderRadius: "4px",
    paddingLeft: "15px",
    padding: "15px",
    background: "transparent",
    "&::placeholder": {
      fontFamily: "Open Sans",
      fontStyle: "normal",
      fontWeight: 400,
      fontSize: "12px",
      lineHeight: "16px",
      display: "flex",
      alignItems: "center",
      color: "rgba(0, 0, 0, 0.5)"
    }
  }
}));



function Registration({ createEntry }) {
  const classes = useStyles();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: ""
    }
  })

  const check = () => {
    navigate(`user`);
    createEntry(true);
  };

  console.log(formik.values)

  return (
    <div className={classes.registration}>
      <div className={classes.registration_header}>
        <Typography
          variant="h2"
          color="textPrimary"
          paragraph
          className={classes.greeting}
        >
          Welcome to the ...
        </Typography>
      </div>
      <div className={classes.registration_form}>
        <Formik>
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h2"
                  color="textPrimary"
                  paragraph
                  className={classes.signIn}
                >
                  Sign In
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <input
                  id="email"
                  name="email"
                  className={classes.search__form_input}
                  type="email"
                  placeholder="Email*"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <input
                  id="password"
                  name="password"
                  className={classes.search__form_input}
                  type="password"
                  placeholder="Password*"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                ></input>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant="h6"
                  color="textPrimary"
                  paragraph
                  className={classes.forgot_password}
                >
                  Forgot Password?
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  style={{ backgroundColor: "#0298A9" }}
                  variant="contained"
                  color="secondary"
                  className={classes.button_signin}
                  onClick={check}
                >
                  Sign In
                </Button>
              </Grid>
              <Checkbox style={{ color: "#0298A9" }} />
              <Typography className={classes.remember_password}>
                Remember password
              </Typography>
            </Grid>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  createEntry
};

export default connect(null, mapDispatchToProps)(Registration);
