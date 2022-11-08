import React, { useState } from "react";
import { Button, Paper, Grid, Typography, Container } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import icon from "../../images/icon.png";
import Input from "./Input";
import useStyles from "./styles";
import { signin, signup } from "../../actions/auth";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const Auth = ({ theme }) => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(formData, history));
      setShowAlert(true);
      setTimeout(() => {
        setIsSignUp(false);
        setShowAlert(false);
      }, "1000");
    } else {
      dispatch(signin(formData, history));

      history.push("/");
    }
  };
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const switchMode = () => {
    setIsSignUp(!isSignUp);
    setShowPassword(false);
  };

  const googleSuccess = async (res) => {
    console.log(res);
    const result = jwt_decode(res?.credential);
    const token = res?.credential;

    try {
      dispatch({ type: "AUTH", data: { result, token } });
      history.push("/");
    } catch (error) {
      console.log(error);
    }
  };
  const googleFailure = (error) => {
    console.log(error);
    console.log("Google login failed");
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Paper
        className={classes.paper}
        elevation={3}
        style={{
          backgroundColor: theme === "dark" ? "#242424" : "#fff",
        }}
      >
        <img
          src={icon}
          className={classes.icon}
          alt="icon"
          style={{
            filter: theme === "dark" ? "invert(1)" : "invert(0)",
          }}
        />
        <Typography
          variant="h6"
          className={classes.title}
          style={{
            color: theme === "dark" ? "#fff" : "#000",
          }}
        >
          {isSignUp
            ? "Se cadastre para conhecer seu novo amigo de patas!"
            : "Entre para conhecer seu novo amigo de patas!"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignUp && (
              <>
                <Input
                  name="firstName"
                  label="Primeiro Nome"
                  handleChange={handleChange}
                  autoFocus
                  half
                  theme={theme}
                />
                <Input
                  name="lastName"
                  label="Sobrenome"
                  handleChange={handleChange}
                  half
                  theme={theme}
                />
                <Input
                  name="phoneNumber"
                  label="Telefone"
                  handleChange={handleChange}
                  theme={theme}
                />
              </>
            )}
            <Input
              name="email"
              label="E-mail"
              handleChange={handleChange}
              type="email"
              theme={theme}
            />
            <Input
              name="password"
              label="Senha"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
              theme={theme}
            />
            {isSignUp && (
              <Input
                name="confirmPassword"
                label="Confirmar Senha"
                handleChange={handleChange}
                type="password"
                theme={theme}
              />
            )}
          </Grid>
          <Alert
            style={{
              marginTop: "10px",
              display: showAlert ? "" : "none",
            }}
            variant="filled"
          >
            Cadastro realizado com sucesso!
          </Alert>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{
              backgroundColor: theme === "dark" ? "#242424" : "#38B6FF",
              color: "#fff",
            }}
            className={classes.submit}
          >
            {isSignUp ? "Cadastrar" : "Entrar"}
          </Button>
          <div className={classes.googleButton}>
            <GoogleLogin
              className={classes.googleButton}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              theme={theme === "dark" ? "filled_black" : "outline"}
              shape="circle"
            />
          </div>

          <Grid container justifyContent="center">
            <Grid item>
              <Button
                onClick={switchMode}
                style={{
                  textTransform: "none",
                  color: theme === "dark" ? "#fff" : "#000",
                }}
              >
                {isSignUp ? "Já possui uma conta?" : "Não possui uma conta?"}
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
