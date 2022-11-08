import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import "dotenv/config";
import "./index.css";

const App = () => {
  const clientId =
    "993941346806-5e42if1ru5hgl6t0t95cs13fkg3jtfll.apps.googleusercontent.com";

  const user = JSON.parse(localStorage.getItem("profile"));

  const [theme, setTheme] = useState(localStorage.getItem("theme"));

  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  return (
    <GoogleOAuthProvider clientId={`${clientId}`}>
      <BrowserRouter>
        <Container maxwidth="xl">
          <Navbar themeChanger={setTheme} />
          <Switch>
            <Route path="/" exact component={() => <Redirect to="/posts" />} />
            <Route path="/posts" exact component={Home} />
            <Route path="/posts/search" exact component={Home} />
            <Route
              path="/auth"
              exact
              component={() =>
                !user ? <Auth theme={theme} /> : <Redirect to="/posts" />
              }
            />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
