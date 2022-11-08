import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Typography, Avatar, Button } from "@material-ui/core";
import { Link, useHistory, useLocation } from "react-router-dom";
import ThemeIcon from "../ThemeIcon/ThemeIcon";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import useStyles from "./styles";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import logo from "../../images/Logo.png";
import logoDark from "../../images/LogoDark.png";

const Navbar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );
  const logout = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/");
  };
  const login = () => {
    dispatch({ type: "LOGOUT" });
    setUser(null);
    history.push("/auth");
  };
  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const toggleDarkMode = (theme) => {
    theme === "dark" ? setDarkMode(true) : setDarkMode(false);
    localStorage.setItem("theme", theme);
  };

  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <div className={classes.brandContainer}>
        <Typography
          component={Link}
          to="/"
          className={classes.heading}
          align="center"
        >
          <img
            className={classes.image}
            src={darkMode ? logoDark : logo}
            alt="logo Amigos de Patas"
            height={100}
          />
        </Typography>
        <ThemeIcon
          theme="light"
          active={darkMode ? false : true}
          onClick={() => toggleDarkMode("light")}
        />
        <ThemeIcon
          theme="dark"
          active={darkMode ? true : false}
          onClick={() => toggleDarkMode("dark")}
        />
        <Toolbar className={classes.toolbar}>
          {user ? (
            <>
              <div className={classes.profile}>
                <Avatar
                  className={classes.avatar}
                  alt={user?.result.name}
                  src={user?.result.picture}
                >
                  {user?.result.name.charAt(0)}
                </Avatar>
                <Typography className={classes.userName} variant="h6">
                  {user.result.name}
                </Typography>
                <Button
                  variant="contained"
                  alt="Botão sair"
                  className={classes.logout}
                  style={{
                    backgroundColor: "#FF5757",
                    borderRadius: "50px",
                    textTransform: "none",
                    color: "white",
                  }}
                  onClick={logout}
                >
                  Sair
                </Button>
              </div>
            </>
          ) : window.location.pathname !== "/auth" ? (
            <Button
              component={Link}
              to="/auth"
              alt="Botão entrar"
              variant="contained"
              onClick={login}
              style={{
                backgroundColor: darkMode ? "#242424" : "#38B6FF",
                borderRadius: "50px",
                textTransform: "none",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "80px",
                }}
              >
                <AccountCircleIcon
                  style={{
                    color: "white",
                    position: "absolute",
                    left: "0px",
                  }}
                  fontSize="large"
                />
                <Typography style={{ color: "white", marginLeft: "30px" }}>
                  Entrar
                </Typography>
              </div>
            </Button>
          ) : null}
        </Toolbar>
      </div>
    </AppBar>
  );
};

export default Navbar;
