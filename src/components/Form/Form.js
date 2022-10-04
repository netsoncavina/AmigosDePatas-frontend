import React, { useState, useEffect } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import FileBase from "react-file-base64";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";

const Form = ({ currentId, setCurrentId }) => {
  const owner = JSON.parse(localStorage.getItem("profile"));
  const phoneNumber = owner?.result.phoneNumber || "";
  const name = owner?.result.name || "";
  const [postData, setPostData] = useState({
    owner: "",
    creator: name,
    name: "",
    race: "",
    age: "",
    phoneNumber: phoneNumber,
    localization: "",
    tags: "",
    selectedFile: "",
  });
  const post = useSelector((state) =>
    currentId ? state.posts.posts.find((post) => post._id === currentId) : null
  );

  // const [currentId, setCurrentId] = useState();
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() => {
    if (post) setPostData(post);
  }, [post]);

  const clear = () => {
    setCurrentId(0);
    setPostData({
      owner: "",
      creator: "",
      name: "",
      race: "",
      age: "",
      localization: "",
      phoneNumber: "",
      description: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (currentId) {
      dispatch(
        updatePost(currentId, { ...postData, owner: owner?.result?.email })
      );
    } else {
      dispatch(createPost({ ...postData, owner: owner?.result?.email }));
    }
    clear();
  };

  if (!owner?.result?.email) {
    return (
      <Paper className={classes.paper}>
        <Typography variant="h6" align="center">
          Você precisa estar logado para postar
        </Typography>
      </Paper>
    );
  }

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">
          {currentId ? `Editando post` : "Criando Post"}
        </Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Cuidador"
          size="small"
          id="Campo cuidador"
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="name"
          variant="outlined"
          label="Nome do pet "
          size="small"
          id="Campo nome do pet"
          fullWidth
          value={postData.name}
          onChange={(e) => setPostData({ ...postData, name: e.target.value })}
        />
        <TextField
          name="race"
          variant="outlined"
          label="Raça"
          size="small"
          id="Campo raça do pet"
          fullWidth
          value={postData.race}
          onChange={(e) => setPostData({ ...postData, race: e.target.value })}
        />
        <TextField
          name="age"
          variant="outlined"
          label="Idade"
          size="small"
          id="Campo idade do pet"
          fullWidth
          value={postData.age}
          onChange={(e) => setPostData({ ...postData, age: e.target.value })}
        />
        <TextField
          name="phoneNumber"
          variant="outlined"
          label="Contato"
          size="small"
          id="Campo numero para contato"
          fullWidth
          value={postData.phoneNumber}
          onChange={(e) =>
            setPostData({ ...postData, phoneNumber: e.target.value })
          }
        />
        <TextField
          name="localization"
          variant="outlined"
          label="Localização"
          size="small"
          id="Campo localização"
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
          id="Campo descrição"
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
          id="Campo tags"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
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
          {currentId ? `Atualizar` : "Postar"}
        </Button>
        <Button
          variant="contained"
          style={{
            backgroundColor: "#FF5757",
            color: "white",
          }}
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
