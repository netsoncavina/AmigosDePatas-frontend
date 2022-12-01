import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Box,
  Typography,
  Button,
  Modal,
} from "@material-ui/core";

import useStyles from "./modalStyles";

const AlertModal = ({ open, handleClose, imagePath, message, text }) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className={classes.card} elevation={10}>
        <CardMedia className={classes.media} image={imagePath} title="Aviso" />
        <Typography variant="h5" gutterBottom className={classes.message}>
          {message}
        </Typography>
        {/* <CardContent className={classes.cardContent}>
          <div className={classes.info}>
            <Typography variant="h5" gutterBottom className={classes.text}>
              {text}
            </Typography>
          </div>
        </CardContent> */}
        {/* <Button variant="contained" color="primary" onClick={handleClose}>
          Fechar
        </Button> */}
      </Card>
    </Modal>
  );
};

export default AlertModal;
