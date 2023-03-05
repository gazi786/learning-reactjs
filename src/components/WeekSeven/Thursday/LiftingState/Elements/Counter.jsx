import React from "react";
import { Box, Button } from "@mui/material";

const Counter = ({ count, setCount }) => {
  const increment = () => setCount(count + 1);
  return (
    <Box>
      <Box mb={2}>Count: {count}</Box>
      <Button onClick={increment} variant="contained">
        Increment Counter
      </Button>
    </Box>
  );
};

export default Counter;
