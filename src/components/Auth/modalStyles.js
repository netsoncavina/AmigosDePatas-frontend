import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
    // position: "absolute",
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    backgroundSize: "cover",
  },
  cardContent: {
    position: "absolute",
    bottom: "0",
    left: "0",
    right: "0",
    display: "flex",
    flexDirection: "column",
    // alignItems: "flex-start",
    // justifyContent: "flex-end",
    width: "96%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    borderRadius: "20px 20px 0 0",
  },
  card: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    height: 500,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 300,
    },
  },
  message: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
    color: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    [theme.breakpoints.down("xs")]: {
      paddingLeft: "10px",
    },
  },
  //   text: {
  //     display: "flex",
  //     justifyContent: "space-between",
  //     alignItems: "center",
  //   },
  description: {
    marginTop: "1rem",
  },
}));