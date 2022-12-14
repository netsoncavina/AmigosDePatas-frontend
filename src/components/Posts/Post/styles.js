import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
  media: {
    height: 100,
    paddingTop: "56.25%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    backgroundBlendMode: "darken",
    backgroundSize: "cover",
  },
  border: {
    border: "solid",
  },
  fullHeightCard: {
    height: "100%",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderRadius: "15px",
    height: "100%",
    position: "relative",
  },
  overlay: {
    position: "absolute",
    top: "20px",
    left: "20px",
    color: "white",
  },
  overlay2: {
    position: "absolute",
    bottom: "20px",
    left: "20px",
    color: "white",
  },
  overlay3: {
    position: "absolute",
    top: "20px",
    right: "7px",
    color: "white",
  },
  overlay4: {
    position: "absolute",
    bottom: "18px",
    right: "7px",
    color: "white",
  },
  grid: {
    display: "flex",
  },
  details: {
    display: "flex",
    justifyContent: "space-between",
    marginTop: "10px",
    marginBottom: "5px",
    marginLeft: "20px",
    marginRight: "20px",
  },
  title: {
    padding: "0 16px",
  },
  cardActions: {
    padding: "0 16px 8px 16px",
    display: "flex",
    justifyContent: "space-between",
  },
  creator: {
    fontSize: "0.8rem",
  },
});
