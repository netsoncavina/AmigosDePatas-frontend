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

const DetailsModal = ({
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
        <CardContent>
          <div className={classes.info}>
            <Typography variant="h5" gutterBottom>
              {name}
            </Typography>
            <Typography variant="body2" gutterBottom>
              <div style={{ display: "flex", alignItems: "center" }}>
                <LocationOn fontSize="small" />
                {localization}
              </div>
            </Typography>
          </div>
          <Typography variant="body2" gutterBottom>
            {phoneNumber ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                <Phone fontSize="small" />
                {phoneNumber}
              </div>
            ) : null}
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

export default DetailsModal;
