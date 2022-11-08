import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "flex",
    alignItems: "flex-end",
    // marginLeft: "65%",
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
      marginLeft: "0px",
    },
  },
  paper: {
    marginTop: theme.spacing(0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    transition: "all 5s ease",
  },
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
    },
  },
  title: {
    fontSize: "0.9rem",
  },
  icon: {
    // width: "100px",
    height: "100px",
  },
  avatar: {
    margin: theme.spacing(1),
    // backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  googleButton: {
    marginBottom: theme.spacing(2),
    justifyContent: "center",
    alignItems: "center",
  },
}));
