import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    backgroundSize: "cover",
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
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
