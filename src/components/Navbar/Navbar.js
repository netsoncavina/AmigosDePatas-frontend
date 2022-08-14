import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";

import dogImage from "../../images/dog.png";
import catImage from "../../images/cat.png";

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.AppBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h2" align="center">
        <img className={classes.image} src={dogImage} alt="dog" height="60" />
        Adote
        <img className={classes.image} src={catImage} alt="cat" height="60" />
      </Typography>
    </AppBar>
  );
};

export default Navbar;
