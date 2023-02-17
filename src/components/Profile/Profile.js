import React, { useState } from "react";
import { Avatar, TextField, Grid, Button, Typography } from "@material-ui/core";
import useStyles from "./styles";

const Profile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const classes = useStyles();

  return (
    <>
      <div className={classes.header}>
        <Typography variant="h4" className={classes.title}>
          Atualizar Perfil
        </Typography>
        <Avatar
          className={classes.avatar}
          alt={user.result.name}
          src="https://scontent.fcgh19-1.fna.fbcdn.net/v/t39.30808-1/267742952_4718276604924601_761171015485200414_n.jpg?stp=dst-jpg_p240x240&_nc_cat=100&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeFa8wokb7X60a0DJlGXvN1nw27Nq7kCKfPDbs2ruQIp8_Qk__uBxasIhD2vOeAOR2VRj_AkCeFWLp7HrBGV4WKI&_nc_ohc=tF7gFx9LqRgAX99MXcZ&_nc_ht=scontent.fcgh19-1.fna&oh=00_AfCMZb92Mv0oFLRjt9iE26Cnn1eI5rKxAOvOYoY5mIOcqg&oe=63F21E96"
        >
          {user.result.name.charAt(0)}
        </Avatar>
      </div>
      <form className={classes.form}>
        <Grid item xs={6} sm={6}>
          <TextField
            name="name"
            variant="outlined"
            label="Nome"
            fullWidth
            value={user.result.name}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              // color: theme === "dark" ? "#f5f5f5" : "#242424",
            }}
          />
        </Grid>
      </form>
    </>
  );
};

export default Profile;
