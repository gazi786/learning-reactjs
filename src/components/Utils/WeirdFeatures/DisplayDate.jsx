import React from "react";
import { Box, Typography } from "@mui/material";
import { getDateForRoute } from "./DateForRoute";

const DisplayDate = ({ location }) => {
  const date = getDateForRoute(location.pathname);
  return (
    <Box>
      <Typography
        variant="p"
        component={"p"}
        sx={{
          fontFamily: "revert-layer",
          fontStyle: "italic",
          color: "#47362e",
          fontSize: "0.65rem",
          fontWeight: "bold",
        }}
      >
        Date: <span dangerouslySetInnerHTML={date}></span>
      </Typography>
    </Box>
  );
};

export default DisplayDate;
