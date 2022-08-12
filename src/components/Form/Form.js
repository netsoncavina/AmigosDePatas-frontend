import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    name: "",
    race: "",
    age: "",
    localization: "",
    tags: "",
    selectedFile: "",
  });
  const [currentId, setCurrentId] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  // useEffect(() => {
  //   if (post) setPostData(post);
  // }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      creator: "",
      name: "",
      race: "",
      age: "",
      localization: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // if (currentId === 0) {
    dispatch(createPost(postData));
    clear();
    // } else {
    //   dispatch(updatePost(currentId, postData));
    //   clear();
    // }
  };
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {/* {currentId ? `Editing "${post.title}"` : "Creating a Memory"} */}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Cuidador"
          size="small"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="name"
          variant="outlined"
          label="Nome "
          size="small"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="race"
          variant="outlined"
          label="Raça"
          size="small"
          fullWidth
          value={postData.race}
          onChange={(e) => setPostData({ ...postData, race: e.target.value })}
        />
        <TextField
          name="age"
          variant="outlined"
          label="Idade"
          size="small"
          fullWidth
          value={postData.age}
          onChange={(e) => setPostData({ ...postData, age: e.target.value })}
        />
        <TextField
          name="localization"
          variant="outlined"
          label="Localização"
          size="small"
          fullWidth
          value={postData.localization}
          onChange={(e) =>
            setPostData({ ...postData, localization: e.target.value })
          }
        />
        <TextField
          name="description"
          variant="outlined"
          label="Descrição"
          multiline
          maxRows={Infinity}
          fullWidth
          value={postData.description}
          onChange={(e) =>
            setPostData({ ...postData, description: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          size="small"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Postar
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Limpar
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
