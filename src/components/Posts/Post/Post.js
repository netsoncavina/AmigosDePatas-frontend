import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import ThumbUpAltOutlined from "@material-ui/icons/ThumbUpAltOutlined";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import moment from "moment";
import useStyles from "./styles";
import { deletePost, likePost } from "../../../actions/posts";
import DetailsModal from "../../Modal/Modal";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("profile"));
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card className={classes.card} elevation={10}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        title={post.name}
        style={{ cursor: "pointer" }}
        onClick={handleOpen}
      />
      <div className={classes.overlay}>
        <Typography variant="h6" className={classes.creator}>
          Por {post.creator}
        </Typography>
        <Typography variant="body2">
          {moment(post.createdAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Typography variant="body2">{post.localization}</Typography>
      </div>
      {user?.result?._id === post.owner ||
      user?.result?.email === post.owner ||
      user?.result?.sub === post.owner ? (
        <div className={classes.overlay3}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              setCurrentId(post._id);
            }}
          >
            <h6 style={{ display: "hidden", fontSize: "0px" }}>Editar</h6>
            <EditIcon fontSize="medium" />
          </Button>
        </div>
      ) : null}
      {user?.result?._id === post.owner ||
      user?.result?.email === post.owner ||
      user?.result?.sub === post.owner ? (
        <div className={classes.overlay4}>
          <Button
            style={{ color: "white" }}
            size="small"
            onClick={() => {
              dispatch(deletePost(post._id));
            }}
          >
            <h6 style={{ display: "hidden", fontSize: "0px" }}>Excluir</h6>
            <DeleteIcon fontSize="small" />
          </Button>
        </div>
      ) : null}
      {open ? (
        <DetailsModal
          open={open}
          handleClose={handleClose}
          selectedFile={post.selectedFile}
          name={post.name}
          creator={post.creator}
          localization={post.localization}
          age={post.age}
          race={post.race}
          phoneNumber={post.phoneNumber}
          description={post.description}
        />
      ) : null}
    </Card>
  );
};

export default Post;
