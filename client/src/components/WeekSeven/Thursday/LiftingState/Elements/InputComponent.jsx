import React from "react";
import { Box, TextField, Typography } from "@mui/material";

const InputComponent = ({ handleChange }) => {
  return (
    <Box sx={{}}>
      <Typography variant="h6" component="h6">
        Lifting State Up
      </Typography>
      <Typography variant="p" component="p" mb={2}>
        Passing props from parent to child component. This allows us to pass
        state from parent to child component. The Input field is set in one
        component and the output is shown on another component via prop passing.
        We have a lift-off...!!!
      </Typography>
      <Typography variant="p" component="p">
        Test the example below by typing in the input field and see the output:
      </Typography>

      <TextField
        sx={{ width: "100%", marginTop: 3 }}
        id="standard-multiline-static"
        placeholder="What's on your mind?"
        variant="standard"
        onChange={handleChange}
      />
    </Box>
  );
};

export default InputComponent;
