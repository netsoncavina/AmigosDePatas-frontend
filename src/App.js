import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Container } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";
import "dotenv/config";

const App = () => {
  // const clientId = process.env.GOOGLE_ID;
  const clientId =
    "993941346806-5e42if1ru5hgl6t0t95cs13fkg3jtfll.apps.googleusercontent.com";
  return (
    <GoogleOAuthProvider clientId={`${clientId}`}>
      <BrowserRouter>
        <Container maxwidth="lg">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/auth" exact component={Auth} />
          </Switch>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
