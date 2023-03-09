import { Box, Container, Typography } from "@mui/material";
import React from "react";

const NodeJS = () => {
  return (
    <Box
      sx={{
        pt: 3,
      }}
    >
      <Container>
        <Box>
          <Typography variant="h6" component="h6" margin={2}>
            Intro to NodeJS
          </Typography>
          <Typography variant="p" component="p" mb={2} ml={2}>
            NodeJS is a JavaScript runtime built on Chrome's V8 JavaScript
            engine. Node.js uses an event-driven, non-blocking I/O model that
            makes it lightweight and efficient. Node.js' package ecosystem, npm,
            is the largest ecosystem of open source libraries in the world.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              border: "solid",
              borderColor: "primary.main",
              borderRadius: "1rem",
              padding: "1rem",
              borderWidth: "1px",
              width: "100%",
            }}
          >
            <Typography variant="h6" component="h6" margin={2}>
              The Different Layers of Software
            </Typography>
            <Typography variant="p" component="p" margin={2}>
              There are three layers of software: the user interface
              (front-end), the business logic (middleware), and the data layer
              (database). The user interface is the part of the software that
              the user interacts with. The business logic is the part of the
              software that processes the data and performs the business logic.
              The data layer is the part of the software that stores the data.
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NodeJS;
