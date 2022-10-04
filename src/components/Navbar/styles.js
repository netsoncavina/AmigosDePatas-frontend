import { makeStyles } from "@material-ui/core/styles";
import { deepPurple } from "@material-ui/core/colors";

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    marginBottom: "15px",
    // display: "flex",
    // flexDirection: "row",
    // justifyContent: "space-between",
    // alignItems: "center",
    padding: "0px 25px",
  },

  heading: {
    color: "rgba(0,183,255, 1)",
    textDecoration: "none",
    marginRight: "auto",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: {
    // marginLeft: "15px",
  },
  toolbar: {
    display: "flex",
    justifyContent: "flex-end",
    width: "500px",
  },
  profile: {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
  },
  userName: {
    display: "flex",
    alignItems: "center",
  },
  brandContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  avatar: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
    width: "45px",
    height: "45px",
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: "black",
  },
  [theme.breakpoints.down("sm")]: {
    brandContainer: {
      display: "flex",
      flexDirection: "column",
    },
    toolbar: {
      width: "100%",
      justifyContent: "center",
    },
  },
}));
