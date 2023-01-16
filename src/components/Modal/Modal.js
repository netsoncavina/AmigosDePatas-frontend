import React, { useState } from "react";
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
import { Phone, LocationOn } from "@material-ui/icons";
import useStyles from "./styles";

export const DetailsModal = ({
  open,
  handleClose,
  selectedFile,
  name,
  creator,
  localization,
  age,
  race,
  phoneNumber,
  description,
}) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className={classes.card} elevation={10}>
        <CardMedia
          className={classes.media}
          image={selectedFile}
          title={name}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.info}>
            <Typography variant="h5" gutterBottom>
              {name}, {age} {age > 1 ? "anos" : "ano"}
            </Typography>
            <Typography variant="body2" gutterBottom>
              {phoneNumber ? (
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Phone fontSize="small" />
                  {phoneNumber}
                </div>
              ) : null}
            </Typography>
          </div>
          <Typography variant="body2" gutterBottom>
            <div style={{ display: "flex", alignItems: "center" }}>
              {localization}
            </div>
          </Typography>
          <Typography
            className={classes.description}
            variant="body1"
            gutterBottom
          >
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Modal>
  );
};

export const DeleteModal = ({ open, handleClose, handleDelete }) => {
  const classes = useStyles();
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Card className={classes.card} elevation={10}>
        <CardContent className={classes.cardContent}>
          <Typography variant="h5" gutterBottom>
            Tem certeza que deseja excluir este post?
          </Typography>
          <Typography variant="body2" gutterBottom>
            Esta ação não poderá ser desfeita.
          </Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Button
            size="small"
            color="secondary"
            onClick={handleDelete}
            variant="contained"
          >
            Excluir
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={handleClose}
            variant="contained"
          >
            Cancelar
          </Button>
        </CardActions>
      </Card>
    </Modal>
  );
};
