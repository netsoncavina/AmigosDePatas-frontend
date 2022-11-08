import React from "react";
import { TextField, Grid, InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Input = ({
  name,
  label,
  handleChange,
  type,
  autoFocus,
  handleShowPassword,
  half,
  theme,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        label={label}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        type={type}
        autoFocus={autoFocus}
        style={{
          backgroundColor: theme === "dark" ? "#242424" : "#fff",
          color: theme === "dark" ? "#fff" : "#000",
        }}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? (
                        <Visibility
                          style={{
                            color: theme === "dark" ? "#fff" : "#000",
                          }}
                        />
                      ) : (
                        <VisibilityOff
                          style={{
                            color: theme === "dark" ? "#fff" : "#000",
                          }}
                        />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
        InputLabelProps={{
          style: {
            color: theme === "dark" ? "#fff" : "#000",
          },
        }}
      />
    </Grid>
  );
};

export default Input;
