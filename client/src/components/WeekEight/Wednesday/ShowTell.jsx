import { Box, Container, Link, Typography } from "@mui/material";
import React from "react";

const ShowTell = () => {
  return (
    <Box
      sx={{
        pt: 3,
      }}
    >
      <Container>
        <Box>
          <Typography variant="h6" component="h6" margin={2}>
            We had our Mission 3 Show and Tell
          </Typography>
          <Typography variant="p" component="p" mb={2} ml={2}>
            Mission 3 focus is based on implementing a functional UI for LevelUp
            Works website/ app.
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
            <Typography variant="p" component="p" margin={2}>
              We had an early break hehehe...Learn More
              <Link href="https://github.com/gazi786/learning-reactjs.git">
                {" "}
                Learning ReactJS
              </Link>
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ShowTell;
