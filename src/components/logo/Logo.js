import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  logoImg: {
    height: 60, // adjust as needed
    width: 60,  // adjust as needed
    transition: "all 0.5s ease",
    marginLeft: -6,
    marginTop: -6,
    marginBottom: -6,
    marginRight: -6,
    "&:hover": {
      filter: `drop-shadow(0 0 8px ${theme.palette.primary.main})`,
    },
  },
}));

export const Logo = () => {
  const classes = useStyles();

  return (
    <img
      src="/logo-transparent.ico"
      alt="Logo"
      className={classes.logoImg}
    />
  );
};