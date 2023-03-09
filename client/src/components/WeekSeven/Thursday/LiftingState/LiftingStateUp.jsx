import React, { useState } from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import InputComponent from "./Elements/InputComponent";
import ShowInput from "./Elements/ShowInput";
import Counter from "./Elements/Counter";

const LiftingStateUp = () => {
  const [inputValue, setInputValue] = useState("");
  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const [count, setCount] = useState(0);

  return (
    <Box sx={{ pt: 3 }}>
      <Container>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              width: "100%",
              maxWidth: "32rem",
              minHeight: "15rem",
              border: "solid",
              borderWidth: "1px",
              borderColor: "gray.300",
              borderRadius: "10px",
            }}
          >
            <Stack direction="column" spacing={5} margin={2}>
              <InputComponent handleChange={handleChange} />
              <ShowInput inputValue={inputValue} />
            </Stack>
          </Box>
          <Box
            sx={{
              width: "100%",
              maxWidth: "32rem",
              minHeight: "15rem",
              border: "solid",
              borderWidth: "1px",
              borderColor: "gray.300",
              borderRadius: "10px",
            }}
          >
            <Typography variant="h6" component="h6" margin={2}>
              Syncing State via Props
            </Typography>
            <Typography variant="p" component="p" mb={2} ml={2}>
              Counter component repeated twice. The count is synced via state.
              Go ahead and try it out. Similarly we can sync state between two
              or more components. This is called Lifting State Up.
            </Typography>
            <Stack direction={"row"} spacing={2} margin={2}>
              <Counter count={count} setCount={setCount} />
              <Counter count={count} setCount={setCount} />
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default LiftingStateUp;
