import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  Container,
  Grow,
  Grid,
  Paper,
  AppBar,
  TextField,
  Button,
} from "@material-ui/core";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import { getPosts, getPostBySearch } from "../../actions/posts";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import Paginate from "../Pagination/Pagination";
import useStyles from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Home = ({ theme }) => {
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const classes = useStyles();
  const dispatch = useDispatch();
  const query = useQuery();
  const history = useHistory();
  const page = query.get("page") || 1;
  const searchQuery = query.get("search");

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      history.push(`/search?search=${search}`);
    }
  };

  const handleAdd = (tag) => {
    setTags([...tags, tag]);
  };

  const handleDelete = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete));
  };

  const searchPost = () => {
    if (!search && !tags.length) dispatch(getPosts());
    if (search.trim() || tags) {
      dispatch(getPostBySearch({ search, tags: tags.join(",") }));
      history.push(
        `/posts/search?searchQuery=${search || "none"}&tags=${tags.join(",")}`
      );
    } else {
      history.push(`/`);
    }
  };

  // const theme = localStorage.getItem("theme");

  return (
    <Grow in>
      <Container maxWidth="lg">
        <Grid
          container
          className={classes.gridContainer}
          justifyContent="space-between"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12} md={7} sm={6}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={4} sm={6}>
            <AppBar
              className={classes.appBarSearch}
              position="static"
              color="inherit"
              style={{
                backgroundColor: theme === "dark" ? "#242424" : "#fff",
                transition: "all 0.5s ease",
              }}
            >
              <TextField
                name="search"
                variant="outlined"
                label="Pesquisar"
                id="Campo de pesquisa"
                fullWidth
                value={search}
                onKeyPress={handleKeyPress}
                onChange={(e) => setSearch(e.target.value)}
                style={{
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
              />
              <ChipInput
                style={{
                  margin: "10px 0",
                  backgroundColor: "#fff",
                  borderRadius: "10px",
                }}
                value={tags}
                newChipKeys={[" "]}
                onAdd={handleAdd}
                onDelete={handleDelete}
                label="Pesquisar por Tags"
                id="Campo de pesquisa por tags"
                variant="outlined"
              />
              <Button
                onClick={searchPost}
                className={classes.searchButton}
                variant="contained"
                color="primary"
                style={{
                  backgroundColor: theme === "dark" ? "#242424" : "#38B6FF",
                  // borderRadius: "50px",
                  textTransform: "none",
                  transition: "all 0.5s ease",
                }}
              >
                Pesquisar
              </Button>
            </AppBar>
            <Form
              currentId={currentId}
              setCurrentId={setCurrentId}
              theme={theme}
            />
            <Paper
              className={classes.pagination}
              elevation={6}
              style={{
                backgroundColor: theme === "dark" ? "#242424" : "#fff",
              }}
            >
              <Paginate page={page} theme={theme} />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Grow>
  );
};

export default Home;
