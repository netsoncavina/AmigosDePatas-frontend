import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  media: {
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
    width: "92%",
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
    width: 400,
    height: 400,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    [theme.breakpoints.down("xs")]: {
      width: 300,
      height: 300,
    },
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  description: {
    marginTop: "1rem",
  },
}));
